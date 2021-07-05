let quizData = {}, questions = {}, question = "", answerChoices = [];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const ques_num_area = document.getElementById("quesNum");

let quesNumber = 1;
let currentQuiz = 0;
let score = 0;

function decode(html) {
    var text = document.createElement("textarea");
    text.innerHTML = html;
    return text.value;
}


fetch(`https://opentdb.com/api.php?amount=10&category=12&type=multiple`)

    .then((res) => res.json())
    .then(data => {
        quizData = data.results.map((ques) => {
            questions = {
                question: decode(ques.question)
            }
            ques.incorrect_answers = ques.incorrect_answers.map((ans) => decode(ans));
            answerChoices = [...ques.incorrect_answers];
            questions.correct = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                questions.correct - 1,
                0,
                decode(ques.correct_answer)
            );
            return { questions, answerChoices };
        });

        loadQuiz();

        function loadQuiz() {
        deselectAnswers();

        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.questions.question;
        a_text.innerText = currentQuizData.answerChoices[0];
        b_text.innerText = currentQuizData.answerChoices[1];
        c_text.innerText = currentQuizData.answerChoices[2];
        d_text.innerText = currentQuizData.answerChoices[3];

        ques_num_area.innerText = "Question " + quesNumber + "/" + quizData.length;
        quesNumber++;
        }

        var sec = 150;
        var time = setInterval(myTimer, 1000);

        function myTimer() {
            document.getElementById('timer').innerHTML = sec + "sec left";
            sec--;
            if (sec == -1) {
            clearInterval(time);
            alert("Time out!! :(");
        
        }
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
                if (answer == quizData[currentQuiz].questions.correct) {
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
            } else {
                alert('Please choose an option before submitting..');
            }
        });
    });

