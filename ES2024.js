'use strict';

(function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
})();


let data = [];

getMeals();

// function getData(meal) {
//   let myHttp = new XMLHttpRequest();
//   myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=' + meal);
//   myHttp.send();
//   myHttp.addEventListener('readystatechange', () => {
//     if (myHttp.readyState === 4) {
//       data = JSON.parse(myHttp.response);
//       console.log(data.recipes);
//       displayData();
//     }
//   });

// }

async function getMeals(meal = 'carrot') {
  const response = await fetch(
    'https://forkify-api.herokuapp.com/api/search?q=' + meal
  );
  const meals = await response.json();
  data = meals.recipes;
  console.log(data);
  displayData();
}


function displayData() {
  let cols = ""
  data.map(
    item =>
      (cols += `
    <div class="col-md-4">
      <img class='pizza' height='200' src=${item.image_url} alt='pizza'>
      <h3>${item.title}</h3 >
      <a target='_blank' href='${item.source_url}'>visit our website</a>
    </div>
  `)
  );
  document.getElementById('rowData').innerHTML = cols;
}

//   for (let i = 0; i < data.length; i++) {
//     cols += `
//   <div class="col-md-4">
//     <span>${data[i].id}</span>
//     <h3>${data[i].title}</h3 >
//     <p>${data[i].body}</p>
//   </div>
// `;
//   }


//using both spread operator and rest parameters 

let starterMenu = ['salad', 'bread', 'water'];
let mainMenu = ['pizza', 'pasta', 'fish', 'corn'];
// ! spread opearator on right side of assignment operator and rest operator is on the left side
const [pizza, , fish, ...otherfood] = [...mainMenu, ...starterMenu];
console.log(pizza, fish, otherfood);


function addNums(...nums) {
  let sum = 0;
  nums.forEach(num => sum += num)
  console.log(sum);
}

addNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let x = [1, 2, 3];
addNums(...x);

// nullish values => null and undefined 
// nullish coallising ignores 0 and '' even though they are falsy values


let name = 10;
// name ??= 10;
name &&= 20;
console.log(name);