



let number = [1,2,3,4,5];
let len = number.length - 1;
for (let i = 0; i <= len; i++) {
  console.log(number[i]);
}

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

myFunc();

let obj1 = {};
let obj2 = {};
let obj3 = obj1;
console.log(obj1 === obj2);
console.log(obj1 == obj3);


// how to remove a specific item is an array
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 