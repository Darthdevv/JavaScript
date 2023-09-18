'use strict';

const score1El = document.querySelector('#score--0').textContent = 0;
const score2El = document.querySelector('#score--1').textContent = 0;
const current1El = document.getElementById('current--0');
const current2El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let score = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);
  if (player1.classList.contains('player--active')) {
    if (randomNum === 1) {
      score = 0;
      document.querySelector('#score--0').textContent = score;
      current1El.textContent = score;
    } else {
      score += randomNum;
      document.querySelector('#score--0').textContent = score;
      current1El.textContent = score;
    }
  } else {
    if (randomNum === 1) {
      score = 0;
      document.querySelector('#score--1').textContent = score;
      current2El.textContent = score;
    } else {
      score += randomNum;
      document.querySelector('#score--1').textContent = score;
      current2El.textContent = score;
    }
  }
  if (randomNum === 1) {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-1.png')
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  } else if (randomNum === 2) {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-2.png');
  } else if (randomNum === 3) {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-3.png');
  } else if (randomNum === 4) {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-4.png');
  } else if (randomNum === 5) {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-5.png');
  } else {
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', '/game/dice-6.png')
  }
})