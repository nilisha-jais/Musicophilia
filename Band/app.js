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
            case 'w':
               var crash = new Audio('sounds/crash.mp3');
               crash.play();  
               break;
           case 'a':
               var kick = new Audio('sounds/kick-bass.mp3');
               kick.play();  
               break;
           case 's':
               var snare = new Audio('sounds/snare.mp3');
               snare.play();  
               break;
           case 'd':
               var tom_1 = new Audio('sounds/tom-1.mp3');
               tom_1.play(); 
               break;
           case 'j':
                var tom_2 = new Audio('sounds/tom-2.mp3');
                tom_2.play();  
                break;
           case 'k':
               var tom_3 = new Audio('sounds/tom-3.mp3');
               tom_3.play();  
               break;
            case 'l':
               var tom_4 = new Audio('sounds/tom-4.mp3');
               tom_4.play();  
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