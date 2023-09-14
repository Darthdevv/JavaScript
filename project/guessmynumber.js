'use strict';

let success = !true;
if (success) {
  document.body.style.backgroundColor = '#60b347';
}

const message = document.querySelector('.message');
message.innerHTML = '🎉 Correct Number';

const number = document.querySelector('.number').innerHTML = 2; 
const score = document.querySelector('.score').innerHTML = 17;
const guess = document.querySelector('.guess').value;
const checkBtn = document.querySelectorAll('.btn')[1];
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const markBox = document.querySelector('.number').textContent = secretNumber;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message');
    message.innerHTML = '⛔️ No Number';
  } else if(guess === secretNumber) {
    document.querySelector('.message');
    message.innerHTML = '✅ Correct Number';
  } else if (guess > secretNumber) {
    document.querySelector('.message');
    message.innerHTML = ' High';
  } else if (guess < secretNumber) {
    document.querySelector('.message');
    message.innerHTML = '✅ Low';
  }
  console.log(guess);
});

