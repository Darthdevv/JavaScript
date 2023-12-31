'use strict';

(function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const welcomeMessage = document.getElementById('welcome');

  hamburger.addEventListener('click', mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
})();

// const sayHi = function () {
//   return 'hello';
// }

// let func = sayHi();

// console.log(func);
// console.log(sayHi());

// console.log(typeof null == 'object'); // error in the language
// console.log(typeof function () { } == 'function'); // functions are treated specially


// function generateUniqueNumbers(start, end) {
//   const numbers = Array.from(
//     { length: end - start + 1 },
//     (_, index) => start + index
//   );
//   const shuffledNumbers = [...numbers];

//   for (let i = shuffledNumbers.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledNumbers[i], shuffledNumbers[j]] = [
//       shuffledNumbers[j],
//       shuffledNumbers[i],
//     ];
//   }

//   return shuffledNumbers;
// }

// // Example usage
// const uniqueNumbers = generateUniqueNumbers(1, 6);
// console.log(uniqueNumbers);


// function checkPositive(arr) {
//   // Only change code below this line
//   return arr.every(curr => (curr > 0 ? curr : null));

//   // Only change code above this line
// }

// console.log(checkPositive([1, 2, 3, -4, 5]));


// // 2 ways to make every first letter of a string capital:

// //using forEach
// function titleCase(str) {
//   return str
//     .toLoweCase()
//     .split(' ')
//     .forEach(element => {
//     element.charAt(0).toUpperCase();
//   });
// }

// console.log(titleCase("I'm a little tea pot"));


// //using map along with replace
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(' ');
// }

// console.log(titleCase('I am a rockstar not a doctor'));



// function getIndexToIns(arr, num) {
//   let finalArr = [...arr,num];
//   finalArr.sort((a, b) => a - b);
//   return finalArr.map((element, index) => {
//     if (element === num) {
//       return index
//     }
//   }).find(value => typeof value !== 'undefined');
// }

// console.log(getIndexToIns([40, 60], 50));

// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   for (let i = 0; i < users.length; i++){
//     console.log(`Full name: ${users[i].name}, Email: ${users[i].email}`);
//   }
// }
// getUsers();

// let promise = new Promise(function (resolve, reject) {
//   console.log('hello world'); 
// })
  
// var string = 'Amgaderty';
// var regx = /^[A-Z][a-z]{3,8}$/;
// console.log(regx.test(string));


// // object destructuring + templete literal + object literal
// function addressMaker(address) {
//   const { city, state } = address;
//   const newAddress = {
//     city,
//     state,
//     country: 'united states',
//   }
//   console.log(`I live in ${newAddress.city} ${newAddress.state} ${newAddress.country}`)
// }

// addressMaker({ city: 'cairo', state: 'egypt' });

// let incomes = [120, 130, 140];
// let sum = 0;
// for (let income of incomes) {
//   income += 500;
// console.log(incomes);
// }

// function add(...nums) {
//   return nums.reduce((x,y) => x + y);
// }

// console.log(add(1, 2, 3, 4));


// if (false) {
//   var example34 = 5;
// }

// console.log(example34);


// let letters = 'yousefF ';
// for (let letter of letters) {
//   console.log(letter.replace('F', 'cau'));
// }

// var a = 10;
// var b = function () {
//   console.log(a);
//   var a = 20;
// }

// console.log(b());

let data = [];

// getData('lettuce');
// displayLinks('lettuce');

function getData(meal) {
  let myHttp = new XMLHttpRequest();
  myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?q=' + meal);
  myHttp.send();
  myHttp.addEventListener('readystatechange', () => {
    if (myHttp.readyState === 4) {
      data = JSON.parse(myHttp.response);
      console.log(data.recipes);
      displayData();
    }
  });
}

function displayData() {
  let cols = ""
//   for (let i = 0; i < data.length; i++) {
//     cols += `
//   <div class="col-md-4">
//     <span>${data[i].id}</span>
//     <h3>${data[i].title}</h3 >
//     <p>${data[i].body}</p>
//   </div>
// `;
  //   }
  data.recipes.map(
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

// function displayLinks(meal) {
//   let links = '';
  
//   for (let i = 0; i < 4; i++){
//     links += `  <li class="nav-item">
//             <a id="pizza" href='https://forkify-api.herokuapp.com/api/search?q=' + ${meal}class="nav-link">${meal}</a>
//             </li>`;
//   }

//   document.getElementById('list').innerHTML = links;
// }