const quizData = [
    {
        question: "Ringo Starr was not the original drummer for the Beatles – but who was?",
        a: "Jimmie Nicol",
        b: "John Lennon",
        c: "Andy White",
        d: "Pete Best",
        correct: "d",
    },
    {
        question: "What was the name of Madonna’s first studio album, released in 1983?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Madonna",
        d: "Mihai Andrei",
        correct: "c",
    },
    {
        question: "One Direction is known for being the runners-up in The X Factor in 2010, but who came first?",
        a: "Matt Cardle",
        b: "Steve Brookstein",
        c: "Sharon Osbourne",
        d: "Leon Jackson",
        correct: "a",
    },
    {
        question: "Which famous rapper married reality TV star Kim Kardashian in 2014?",
        a: "Tupac Amaru Shakur",
        b: "Kanye West",
        c: "Juice Wrld",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});