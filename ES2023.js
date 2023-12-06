'use strict';

// function declaration 

// function showMessage(name, text = 'no') {
//   name = 'samy';
//   console.log(name + ':' + text)
// }

// showMessage('yousef', 'yes');


// function showCount(count) {
//   console.log(count ?? 'unknown')
// }

// showCount(null);
// showCount(undefined);
// showCount('');
// showCount(0);
// showCount(!0);


// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('enter your age!',18);

// if (checkAge(age)) {
//   alert('Access granted');
// } else {
//   alert('Access denied');
// }


function doNothing() {
  
}

console.log(doNothing());

function checkAge(age) {
  return age >= 18 ?  true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return age >= 18 || confirm('Did parents allow you?');
}

console.log(checkAge(19));

function min(a,b) {
  return Math.min(a, b);
}

console.log(min(1, 2));
console.log(min(-1, 1));
console.log(min(1, 1));


function pow(x, n) {
  return x ** n;
}

console.log(pow(2, 2));
console.log(pow(3, 2));
console.log(pow(3, 3));