'use strict';

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const current1El = document.getElementById('current--0');
const current2El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  // Genereating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  
  // 3 different ways of displaying dice
  diceEl.classList.remove('hidden');
  diceEl.src = `/game/dice-${dice}.png`;
  // diceEl.setAttribute('src', `/game/dice-${dice}.png`);

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else{
    switchPlayer();
  }
  // if (randomNum === 1) {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-1.png')
  //   player1.classList.toggle('player--active');
  //   player2.classList.toggle('player--active');
  // } else if (randomNum === 2) {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-2.png');
  // } else if (randomNum === 3) {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-3.png');
  // } else if (randomNum === 4) {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-4.png');
  // } else if (randomNum === 5) {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-5.png');
  // } else {
  //   diceEl.classList.remove('hidden');
  //   diceEl.setAttribute('src', '/game/dice-6.png')
  // }
})


btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  switchPlayer();
})

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
})


