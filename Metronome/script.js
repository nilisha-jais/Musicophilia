let pBar = document.getElementById("progress-bar");
let metronome = document.getElementById("metronome");
let bpmBar = document.getElementById("bpm-bar");
let clickSound = null;
let loaded = false;
let counter = 0;
let start = 0;
let end = 0;
let bpm = 120; // beats per minute
let tick = 60 / bpm; // time of one beats
let currentBpm = bpm; // currently playing BPM

let timer;
let pBarTimer;

let mute = false;
let shouldMove = false;
let spaceBpm = false;

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomDir() {
  return Math.floor(Math.random() * 360);
}

function bpmChange(val) {
  bpm = val;
  tick = 60 / bpm;
  bpmSpan = document.getElementById("bpm-value");
  bpmSpan.innerHTML = val;
}

function resetAnimation() {
  pBar.style.animation = "none";
  pBar.offsetHeight;
  pBar.style.animation = null;
}

function move(width = 1) {
  resetAnimation();
  pBar.style.animationDuration = tick * 1000 + "ms";
  pBar.style.animationPlayState = "running";
  timer = setInterval(() => {
    endProgress();
    if (currentBpm != bpm) {
      currentBpm = bpm;
      clearInterval(timer);
      move();
    }
  }, tick * 1000);
}

let lastBeep = Date.now();
function endProgress() {
  let now = Date.now();
  let elapsed = now - lastBeep;
  console.log(
    "Time since last tick: " + elapsed + "ms, real BPM: " + 60000 / elapsed
  );
  lastBeep = now;

  if (!mute) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
  metronome.style.background =
    "linear-gradient(" +
    getRandomDir() +
    "deg" +
    ", " +
    getRandomColor() +
    ", " +
    getRandomColor() +
    ", " +
    getRandomColor() +
    ")";
}

function handleClick(event) {
  const button = event.target;
  const stopAction = button.dataset.action != "Start";
  const actionToggle = !stopAction ? "Stop" : "Start";

  button.innerHTML = `${actionToggle} Metronome`;
  button.dataset.action = actionToggle;

  if (stopAction) {
    stopMetronome();
  } else {
    startMetronome();
  }
}

function startMetronome() {
  shouldMove = true;
  move();
}

function stopMetronome() {
  shouldMove = false;
  clearInterval(timer);
  resetAnimation();
}

function toggleSound() {
  if (!mute)
    document.getElementById("sound-icon").className = "las la-volume-off";
  else document.getElementById("sound-icon").className = "las la-volume-up";

  mute = !mute;
}

window.onload = function () {
  clickSound = new Audio("assets/audio/click.wav");
  clickSound.addEventListener("canplaythrough", function () {
    loaded = true;
    if (document.querySelector('[data-action="Start"]')) {
      document.querySelector('[data-action="Start"]').disabled = false;
    }
  });
};
