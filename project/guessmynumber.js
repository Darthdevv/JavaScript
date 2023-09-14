'use strict';

const message = document.querySelector('.message');
message.innerHTML = '🎉 Correct Number';


const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const guess = document.querySelector('.guess').value;
const checkBtn = document.querySelectorAll('.btn')[1];
const againBtn = document.querySelectorAll('.btn')[0];
const secretNumber = Math.trunc(Math.random() * 20) + 1;
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
    document.body.style.backgroundColor = '#60b347';
    HighScore = scoreCounter;
    highScore.textContent = HighScore;
  } else if (guess > secretNumber) {
    if (scoreCounter > 1) {
        document.querySelector('.message');
        message.innerHTML = '📈 Too High';
        scoreCounter--;
        score.textContent = scoreCounter;
    } else {
        document.querySelector('.message');
        message.innerHTML = '💥 You lost the game!';
        score.textContent = 0;
      }
  } else if (guess < secretNumber) {
    if (scoreCounter > 1) {
        document.querySelector('.message');
        message.innerHTML = '📉 Too Low';
        scoreCounter--;
        score.textContent = scoreCounter;
    } else {
        document.querySelector('.message');
        message.innerHTML = '💥 You lost the game!';
        score.textContent = 0;
    }
  }
  console.log(guess);
});

function reset() {
  location.reload();
}

againBtn.addEventListener('click', reset);