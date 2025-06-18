import questions from './questions.js';

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const content = document.querySelector(".content");
const finish = document.querySelector(".finish");
const finishText = finish.querySelector("span");
const restartBtn = finish.querySelector("button");

let currentIndex = 0;
let questionsCorrect = 0;

function showQuestion(index) {
  const q = questions[index];
  spnQtd.textContent = `${index + 1}/${questions.length}`;
  question.textContent = q.question;
  answers.innerHTML = "";

  q.answers.forEach(answer => {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.textContent = answer.option;
    div.onclick = () => checkAnswer(answer.correct);
    answers.appendChild(div);
  });
}

function checkAnswer(correct) {
  if (correct) questionsCorrect++;
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  content.style.display = "none";
  finish.style.display = "flex";
  finishText.textContent = `Você acertou ${questionsCorrect} de ${questions.length}`;
}

restartBtn.onclick = () => {
  currentIndex = 0;
  questionsCorrect = 0;
  content.style.display = "flex";
  finish.style.display = "none";
  showQuestion(currentIndex);
};

showQuestion(currentIndex);