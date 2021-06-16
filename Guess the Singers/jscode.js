let singers = new Array("pictures/ar.png", "pictures/arijit.png", "pictures/atif.png", "pictures/jubin.png", "pictures/kk.png", "pictures/mohit.png", "pictures/neha.png", "pictures/alka.png", "pictures/shreya.png", "pictures/sonu.png");
let singersPunjabi = new Array("pictures/ammy.png", "pictures/diljit.png", "pictures/guru.png", "pictures/hardy.png", "pictures/jass.png", "pictures/kaka.png", "pictures/parmish.png", "pictures/praak.png", "pictures/sharry.png", "pictures/siddhu.png");
let singersEnglish = new Array("pictures/ed.png", "pictures/bruno.png", "pictures/justin.png", "pictures/eminem.png", "pictures/zyan.png", "pictures/selena.png", "pictures/ariana.png", "pictures/beyonce.png", "pictures/rihanna.png", "pictures/billie.png");

let counter = 0;
let score = 0;
let tot = 0;
let scoreText = document.getElementById("scores");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option1Punjabi = document.getElementById("option1Punjabi");
let option2Punjabi = document.getElementById("option2Punjabi");
let option3Punjabi = document.getElementById("option3Punjabi");
let option4Punjabi = document.getElementById("option4Punjabi");
let option1English = document.getElementById("option1English");
let option2English = document.getElementById("option2English");
let option3English = document.getElementById("option3English");
let option4English = document.getElementById("option4English");
let next = document.getElementById("next_button");
let nextPunjabi = document.getElementById("next_button_punjabi");
let nextEnglish = document.getElementById("next_button_english");
let image = document.getElementById("singer_image");
let imagePunjabi = document.getElementById("singer_image_punjabi");
let imageEnglish = document.getElementById("singer_image_english");

option1.addEventListener("click",updateScoreHindi);
option2.addEventListener("click",updateScoreHindi);
option3.addEventListener("click",updateScoreHindi);
option4.addEventListener("click",updateScoreHindi);
option1English.addEventListener("click",updateScoreEnglish);
option2English.addEventListener("click",updateScoreEnglish);
option3English.addEventListener("click",updateScoreEnglish);
option4English.addEventListener("click",updateScoreEnglish);
option1Punjabi.addEventListener("click",updateScorePunjabi);
option2Punjabi.addEventListener("click",updateScorePunjabi);
option3Punjabi.addEventListener("click",updateScorePunjabi);
option4Punjabi.addEventListener("click",updateScorePunjabi);


function startAgain() {
    location.reload();
}

function checkAnswer() {

    if (counter == 0) {
        console.log("test");
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 1) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 2) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "green";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 3) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "green";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 4) {
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 5) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "green";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 6) {
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 7) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 8) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "green";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 9) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        next.style.display = "none";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
        document.getElementById("close_button").style.display = "block";
    }
}


function changeColor() {
    option1.style.backgroundColor = "white";
    option1.style.color = "black";
    option2.style.backgroundColor = "white";
    option2.style.color = "black";
    option3.style.backgroundColor = "white";
    option3.style.color = "black";
    option4.style.backgroundColor = "white";
    option4.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}

function nextQuestion() {

    if (counter == 1) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "JUBIN NAUTIYAL";
        option2.innerHTML = "ARIJIT SINGH";
        option3.innerHTML = "KUMAR SANU";
        option4.innerHTML = "ATIF ASLAM";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;

        changeColor();
    }
    if (counter == 2) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "RAHUL MISHRA";
        option2.innerHTML = "SHANKAR MAHADEVAN";
        option3.innerHTML = "SONU NIGAM";
        option4.innerHTML = "ATIF ASLAM";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 3) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "K K";
        option2.innerHTML = "SHANKAR MAHADEVAN";
        option3.innerHTML = "JUBIN NAUTIYAL";
        option4.innerHTML = "MOHIT CHAUHAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 4) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "K K";
        option2.innerHTML = "AR RAHMAN";
        option3.innerHTML = "JUBIN NAUTIYAL";
        option4.innerHTML = "UDIT NARAYAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 5) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "JUBIN NAUTIYAL";
        option2.innerHTML = "SONU NIGAM";
        option3.innerHTML = "MOHIT CHAUHAN";
        option4.innerHTML = "UDIT NARAYAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 6) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "NEHA KAKKAR";
        option2.innerHTML = "SUNIDHI CHAUHAN";
        option3.innerHTML = "SHREYA GHOSHAL";
        option4.innerHTML = "ASHA BHONSLE";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 7) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "NEHA KAKKAR";
        option2.innerHTML = "ALKA YAGNIK";
        option3.innerHTML = "KANIKA KAPOOR";
        option4.innerHTML = "SHREYA GHOSHAL";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 8) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "MONALI THAKUR";
        option2.innerHTML = "ALKA YAGNIK";
        option3.innerHTML = "SUNIDHI CHAUHAN";
        option4.innerHTML = "SHREYA GHOSHAL";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 9) {
        let imageTemp = singers[counter];
        image.src = imageTemp;
        check = 0;
        option1.innerHTML = "ARMAAN MALIK";
        option2.innerHTML = "SONU NIGAM";
        option3.innerHTML = "ATIF ASLAM";
        option4.innerHTML = "SHAAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
}

/*--------------------------------Punjabi Section---------------------------------*/
function punjabi() {
    let hints2 = document.getElementById("hints_english")
    hints2.style.display = "none";
    let options2 = document.getElementById("options_english")
    options2.style.display = "none";
    let hints = document.getElementById("hints_punjabi")
    hints.style.display = "block";
    let options = document.getElementById("options_punjabi")
    options.style.display = "block";
    document.getElementById("next_button_punjabi").style.display = "block";
    counter = 0;
    score = 0;
    tot = 0;
    scoreText.innerHTML='Score: 0/0';
}

function startAgainPunjabi() {
    location.reload();
}

function checkAnswerPunjabi() {

    if (counter == 0) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;
        counter += 1;
    } else if (counter == 1) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 2) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "green";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 3) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 4) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 5) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "green";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 6) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 7) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 8) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "green";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 9) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        nextPunjabi.style.display = "none";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;
        counter += 1;
        document.getElementById("close_button_punjabi").style.display = "block";
    }
}


function changeColorPunjabi() {
    option1Punjabi.style.backgroundColor = "white";
    option1Punjabi.style.color = "black";
    option2Punjabi.style.backgroundColor = "white";
    option2Punjabi.style.color = "black";
    option3Punjabi.style.backgroundColor = "white";
    option3Punjabi.style.color = "black";
    option4Punjabi.style.backgroundColor = "white";
    option4Punjabi.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}
/*let singersPunjabi = new Array("ammy.png","diljit.png", "guru.png", "hardy.png", "jass.png", "kaka.png", "parmish.png", "praak.png", "sharry.png", "siddhu.png");
 */
function nextQuestionPunjabi() {

    if (counter == 1) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        option1Punjabi.innerHTML = "DILJIT DOSANJH";
        option2Punjabi.innerHTML = "JASS MANAK";
        option3Punjabi.innerHTML = "GIPPY GREWAL";
        option4Punjabi.innerHTML = "HONEY SINGH";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 2) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "GARRY SANDHU";
        option2Punjabi.innerHTML = "HAPPY RAIKOTI";
        option3Punjabi.innerHTML = "GURU RANDHAWA";
        option4Punjabi.innerHTML = "SHARRY MAAN";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 3) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "HARDY SANDHU";
        option2Punjabi.innerHTML = "SIDDHU MOOSEWALA";
        option3Punjabi.innerHTML = "B PRAAK";
        option4Punjabi.innerHTML = "PARMISH VERMA";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 4) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "PARMISH VERMA";
        option2Punjabi.innerHTML = "JASS MANAK";
        option3Punjabi.innerHTML = "KAKA";
        option4Punjabi.innerHTML = "AMMY VIRK";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 5) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "DALER MEHANDI";
        option2Punjabi.innerHTML = "DILJIT DOSANJH";
        option3Punjabi.innerHTML = "KAKA";
        option4Punjabi.innerHTML = "GURU RANDHAWA";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 6) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "PARMISH VERMA";
        option2Punjabi.innerHTML = "GIPPY GREWAL";
        option3Punjabi.innerHTML = "BADSHAH";
        option4Punjabi.innerHTML = "AMRINDER GILL";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 7) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "SHARRY MAAN";
        option2Punjabi.innerHTML = "B PRAAK";
        option3Punjabi.innerHTML = "SATINDER SARTAJ";
        option4Punjabi.innerHTML = "HARDY SANDHU";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 8) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "GARRY SANDHU";
        option2Punjabi.innerHTML = "B PRAAK";
        option3Punjabi.innerHTML = "PARMISH VERMA";
        option4Punjabi.innerHTML = "SHARRY MAAN";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 9) {
        let imageTemp = singersPunjabi[counter];
        imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "KARAN AUJLA";
        option2Punjabi.innerHTML = "SIDDHU MOOSEWALA";
        option3Punjabi.innerHTML = "DILJIT DOSANJH";
        option4Punjabi.innerHTML = "AMMY VIRK";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
}





/*--------------------------------------Hollywood Section----------------------------------------------*/


function hollywood() {
    let hints = document.getElementById("hints_english")
    hints.style.display = "block";
    let options = document.getElementById("options_english")
    options.style.display = "block";
    document.getElementById("next_button_english").style.display = "block";
    counter = 0;
    score = 0;
    tot = 0;
    scoreText.innerHTML='Score: 0/0';
}

function startAgainEnglish() {
    location.reload();
}

function checkAnswerEnglish() {

    if (counter == 0) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;
        counter += 1;
    } else if (counter == 1) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "green";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 2) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 3) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "green";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 4) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 5) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 6) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 7) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 8) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "green";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 9) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        nextEnglish.style.display = "none";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;
        counter += 1;
        document.getElementById("close_button_english").style.display = "block";
    }
}

function changeColorEnglish() {
    option1English.style.backgroundColor = "white";
    option1English.style.color = "black";
    option2English.style.backgroundColor = "white";
    option2English.style.color = "black";
    option3English.style.backgroundColor = "white";
    option3English.style.color = "black";
    option4English.style.backgroundColor = "white";
    option4English.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}
/*let singersEnglish = new Array("ed.png", "bruno.png", "justin.png", "eminem.png", "zyan.png", "selena.png", "ariana.png", "beyonce.png", "rihanna.png", "billie.png");
3 1 2 4*/
function nextQuestionEnglish() {

    if (counter == 1) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        option1English.innerHTML = "ED SHEERAN";
        option2English.innerHTML = "BRUNO MARS";
        option3English.innerHTML = "JUSTIN BIEBER";
        option4English.innerHTML = "EMINEM";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 2) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "JUSTIN BIEBER";
        option2English.innerHTML = "ZAYN ";
        option3English.innerHTML = "CHRIS BROWN";
        option4English.innerHTML = "DRAKE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 3) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "JAY Z";
        option2English.innerHTML = "EMINEM";
        option3English.innerHTML = "JUSTIN BIEBER";
        option4English.innerHTML = "BRUNO MARS";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 4) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "EMINEM";
        option2English.innerHTML = "NICK JONAS";
        option3English.innerHTML = "BRUNO MARS";
        option4English.innerHTML = "ZAYN";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 5) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "RIHANNA";
        option2English.innerHTML = "KATY PERRY";
        option3English.innerHTML = "ARIANA GRANDE";
        option4English.innerHTML = "SELENA GOMEZ";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 6) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BILLIE EILISH";
        option2English.innerHTML = "RIHANNA";
        option3English.innerHTML = "SELENA GOMEZ";
        option4English.innerHTML = "ARIANA GRANDE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 7) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BEYONCE";
        option2English.innerHTML = "NICKI MINAJ";
        option3English.innerHTML = "ARIANA GRANDE";
        option4English.innerHTML = "ADELE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 8) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BILLIE EILISH";
        option2English.innerHTML = "BEYONCE";
        option3English.innerHTML = "RIHANNA";
        option4English.innerHTML = "SELENA GOMEZ";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 9) {
        let imageTemp = singersEnglish[counter];
        imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BEYONCE";
        option2English.innerHTML = "ARIANA GRANDE";
        option3English.innerHTML = "KATY PERRY";
        option4English.innerHTML = "BILLIE EILISH";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
}

// Score Feature - updating the values

function updateScoreEnglish(e) {
    const ansKeyEng = [1,2,1,2,4,4,4,1,3,4]
    let option = 'option' + `${ansKeyEng[counter-1]}` + 'English';
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}
function updateScoreHindi(e) {
    const ansKeyEng = [1,2,4,3,1,3,1,2,4,2]
    let option = 'option' + `${ansKeyEng[counter-1]}`;
    console.log(e.target.id, option);
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}
function updateScorePunjabi(e) {
    const ansKeyEng = [1,1,3,1,2,3,1,2,4,2]
    let option = 'option' + `${ansKeyEng[counter-1]}` + 'Punjabi';
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}