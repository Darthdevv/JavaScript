'use strict';

const group = document.querySelector('.group');


for (let i = 1; i < 20; i++) {
  const container = document.createElement('div');
  container.className = 'iconContainer';
  container.id = `iconContainer${i}`;
  group.appendChild(container);
}



