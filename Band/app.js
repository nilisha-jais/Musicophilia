window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors=[
        'rgb(119, 211, 26)',
        'rgb(101, 123, 172)',
        'rgb(190, 109, 32)',
        'rgb(139, 67, 211)',
        'rgb(167, 51, 147)',
        'rgb(255, 0, 47)'
    ];

    pads.forEach( (pad, index) =>{
        pad.addEventListener( 'click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //the drum can be played with the keys A.S,D,J,K,L
    document.addEventListener('keypress', function(event) {
        var keyPressed = event.key;
        switch(keyPressed){
            case 'a':
               var closed_hithat  = new Audio('sounds/sound1.mp3');
               closed_hithat.play();  
               break;
           case 's':
               var kick = new Audio('sounds/sound2.mp3');
               kick.play();  
               break;
           case 'd':
               var clap = new Audio('sounds/sound3.mp3');
               clap.play();  
               break;
           case 'j':
               var open_hithat = new Audio('sounds/sound4.mp3');
               open_hithat.play(); 
               break;
           case 'k':
                var snare = new Audio('sounds/sound5.mp3');
                snare.play();  
                break;
           case 'l':
               var crash = new Audio('sounds/sound6.mp3');
               crash.play();  
               break;
        }
     })

    const createBubbles = (index) =>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation= 'jump 1.1s ease';
        bubble.addEventListener("animationend", function(){
                visual.removeChild(this);
        });
    };
 });