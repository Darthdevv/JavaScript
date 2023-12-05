'use strict';

// function declaration 

function showMessage(name, text = 'no') {
  name = 'samy';
  console.log(name + ':' + text)
}

showMessage('yousef', 'yes');


function showCount(count) {
  console.log(count ?? 'unknown')
}

showCount(null);
showCount(undefined);
showCount('');
showCount(0);
showCount(!0);


function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('enter your age!',18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}


function doNothing() {
  
}

console.log(doNothing());