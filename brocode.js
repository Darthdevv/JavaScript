'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

openBtns.forEach(btn => btn.addEventListener('click', function () {
  toggleModal();
}))

closeBtn.addEventListener('click', function () {
  toggleModal();
})

overlay.addEventListener('click', function () {
  toggleModal();
})

