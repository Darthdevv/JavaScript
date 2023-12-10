'use strict';

const sayHi = function () {
  return 'hello';
}

let func = sayHi();

console.log(func);
console.log(sayHi());

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Do you agree?',
//   function () {
//     alert('You agreed.');
//   },
//   function () {
//     alert('You canceled the execution.');
//   }
// );

// let age = prompt('What is your age?', 18);

// // conditionally declare a function
// if (age < 18) {
//   function welcome() {
//     alert('Hello!');
//   }
// } else {
//   function welcome() {
//     alert('Greetings!');
//   }
// }

// console.log(welcome());


console.log(typeof null == 'object'); // error in the language
console.log(typeof function () { } == 'function'); // functions are treated specially


function generateUniqueNumbers(start, end) {
  const numbers = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );
  const shuffledNumbers = [...numbers];

  for (let i = shuffledNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledNumbers[i], shuffledNumbers[j]] = [
      shuffledNumbers[j],
      shuffledNumbers[i],
    ];
  }

  return shuffledNumbers;
}

// Example usage
const uniqueNumbers = generateUniqueNumbers(1, 6);
console.log(uniqueNumbers);


function checkPositive(arr) {
  // Only change code below this line
  return arr.every(curr => (curr > 0 ? curr : null));

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));

