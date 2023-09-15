'use strict';

const message = document.querySelector('.message');
message.innerHTML = 'Start guessing...';


const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const guess = document.querySelector('.guess').value;
const checkBtn = document.querySelectorAll('.btn')[1];
const againBtn = document.querySelectorAll('.btn')[0];
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let markBox = document.querySelector('.number');

let scoreCounter = 20;
let HighScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message');
    message.innerHTML = '⛔️ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message');
    message.innerHTML = '🎉 Correct Number';
    markBox = document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    if (scoreCounter > HighScore) {
      HighScore = scoreCounter;
      document.querySelector('.highscore').textContent = HighScore
    }
  } else if (guess !== secretNumber) {
      if (scoreCounter > 1) {
        document.querySelector('.message').innerHTML = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
        scoreCounter--;
        score.textContent = scoreCounter;  
      }
    }
  }
);

function reset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreCounter = 20;
  score.textContent = scoreCounter;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message');
  message.innerHTML = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

}

againBtn.addEventListener('click', reset);