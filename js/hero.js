'use strict';

const group = document.querySelector('.group');


for (let i = 1; i < 20; i++) {
  const container = document.createElement('div');
  container.className = 'iconContainer';
  const containerId = `iconContainer${i}`;
  container.id = containerId;
  group.appendChild(container);
  addIcons(containerId);
}

function addIcons(containerId) {
  const iconContainer = document.getElementById(containerId);
  const uniCode = [
    '\uf001', '\uf002', '\uf003', '\uf004', '\uf005', '\uf006', '\uf007', '\uf008', '\uf009', '\uf010', '\uf011', '\uf012', '\uf013', '\uf014', '\uf015', '\uf016', '\uf017', '\uf018', '\uf019', '\uf020'
  ]
  for (let i = 0; i < 50; i++) {
    const icons = document.createElement('i');
    icons.className = 'icon fas';
    icons.innerHTML = randomIcon(uniCode);
  iconContainer.appendChild(icons);
  }
}

function randomIcon(values) {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
