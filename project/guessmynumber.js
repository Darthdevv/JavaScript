'use strict';


const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const guess = document.querySelector('.guess').value;
const checkBtn = document.querySelectorAll('.btn')[1];
const againBtn = document.querySelectorAll('.btn')[0];
let secretNumber = generateRandomNum();
let markBox = document.querySelector('.number');
let scoreCounter = 20;
let HighScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setColor(color) {
  document.body.style.backgroundColor = color;
}

function setWidth(width) {
  document.querySelector('.number').style.width = width ;
}

function generateRandomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    markBox = document.querySelector('.number').textContent = secretNumber;
    setWidth('30rem');
    setColor('#60b347');
    if (scoreCounter > HighScore) {
      HighScore = scoreCounter;
      document.querySelector('.highscore').textContent = HighScore
    }
  } else if (guess !== secretNumber) {
      if (scoreCounter > 1) {
        guess > secretNumber
          ? displayMessage('📈 Too High')
          : displayMessage('📉 Too Low');
        scoreCounter--;
        score.textContent = scoreCounter;  
      }
    }
  }
);

function reset() {
  secretNumber = generateRandomNum();
  scoreCounter = 20;
  score.textContent = scoreCounter;
  setColor('#222');
  setWidth('15rem');
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

}

againBtn.addEventListener('click', reset);