// ? generate an array with 10 random numbers(Floats) from 0 => 10
const array = Array(10)
  .fill()
  .map(() => 10 * Math.random());

console.log(array);

// ? generate an array with 10 random numbers(Integers) from 0 => 10
const array1 = Array(10)
  .fill()
  .map(() => Math.floor(10 * Math.random()));

console.log(array1);

// ? generate an array with 10 random numbers(Integers) from 1 => 10
const array2 = Array(10)
  .fill()
  .map(() => Math.ceil(10 * Math.random()));

console.log(array2);

const array0 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(array0);

// ? generate an array with random 6 numbers(Integers) from 0 => 10 ES6 syntax
const array3 = Array.from({ length: 6 }, () => Math.floor(10 * Math.random()));
console.log(array3);

// ? Write a JavaScript program to find all unique values in an given array of numbers

function uniqueValues(arr) {
  return new Set(arr);
}
// * another solution

const unique_Values = arr => [...new Set(arr)];

console.log(uniqueValues([1, 1, 2, 3, 3, 3]));
console.log(unique_Values([1, 1, 3, 3, 4, 4, 6, 6]));

// ? Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeArays(arr1, arr2) {
  let mergedArrays = arr1.concat(arr2);
  return [...new Set(mergedArrays)];
}

console.log(
  mergeArays([1, 2, 3, 'bangladish', 'egypt', true], [3, 4, 5, 1, 'egypt']),
);

// * another solution
function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

var arry1 = ['Vijendra', 'Singh'];
var arry2 = ['Singh', 'Shakya'];
// Merges both arrays and gets unique items
var arry3 = arrayUnique(arry1.concat(arry2));
console.log(arry3);

var a = [1, 2, 3],
  b = [101, 2, 1, 10];
var c = a.concat(b);
var d = c.filter((item, pos) => c.indexOf(item) === pos);

console.log(d);

var m = [undefined, true].filter(x => x === true);
console.log(m);

// ?  Write a JavaScript function to check whether an `input` is an array or not

function isArray(input) {
  if (Array.isArray(input)) {
    return true;
  } else {
    return false;
  }
}

console.log(isArray([1, 2, 3]));
console.log(isArray(Array(5)));
console.log(isArray('[1,2]'));
console.log(isArray('yousef'));
console.log(isArray(true));

// * another solution
const is_Arr = input => {
  if (toString.call(input) === '[object Array]') {
    return true;
  } else {
    return false;
  }
};

console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

// experimenting
const ar = [1, 2, 3];
const ra = '1';
const ran = 1;
const rab = true;
const rao = { name: 'yousef' };

console.log(rao.toString());
console.log(Object.prototype.toString.call(rao));

// ? Write a simple JavaScript program to join all elements of the following array into a string.

function joinElements(arr) {
  return arr.join(',');
}

console.log(joinElements(['Red', 'Green', 'White', 'Black']));

// experimenting
const myColor = ['Red', 'Green', 'White', 'Black'];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// ?  Write a JavaScript program to sort numbers of an array in accending order

function compareNumbers(a, b) {
  return a - b;
}

function sortArray(arr) {
  return arr.sort(compareNumbers);
}

console.log(sortArray([-1, 6, 5, 3, -2, 2, 7, 9, -3, 10, 0]));

// * this is called the Guard Operator it can stop the code from running
false && console.log('hello world');

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// ? creating shallow copies of array:
const arr = [1, 2, 3, 4];
console.log(arr.slice());
console.log([...arr]);

// * slice and splice are work the same but the fundemental difference between them is that splice mutates the original array whereas slice returns a new one

const myFish = ['angel', 'clown', 'mandarin'];
// const removed1 = myFish.splice(-1, 0, 'sturgeon');
const removed2 = myFish.splice(myFish.length, 0, 'sturgeon');

console.log(removed2);
console.log(myFish);

console.log(myFish.toReversed()); //does not mutate array;
console.log(myFish.reverse()); // mutates array;

// Array.at()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.at(-1)); // 5
console.log(numbers[-1]); //undefined

// ? getting last array element
console.log(numbers[numbers.length - 1]); //5
console.log(numbers.slice(-1)[0]); //5
console.log(numbers.at(-1)); //5

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.map(movement => {
  movement > 0
    ? console.log(`the customer deposited ${movement}`)
    : console.log(`the customer withdrawed ${Math.abs(movement)}`);
});
console.log('----------Map----------');
for (const movement of movements) {
  movement > 0
    ? console.log(`the customer deposited ${movement}`)
    : console.log(`the customer withdrawed ${Math.abs(movement)}`);
}
console.log('----------For Of----------');
movements.forEach(movement => {
  movement > 0
    ? console.log(`the customer deposited ${movement}`)
    : console.log(`the customer withdrawed ${Math.abs(movement)}`);
});
console.log('----------forEach----------');



// filter numbers or strings in an array
const arr24 = [2, 3, 4, 'total', 5, 'price'];

const filteredArray1 = arr24.filter(el => typeof el === 'number');
console.log(filteredArray1);
const filteredArray2 = arr24.filter(el => typeof el !== 'number');
console.log(filteredArray2);
console.log(arr24);


console.log('--------------------------------');
function outer() {
  const name = 'yousef';

  function inner() {
    console.log(name);
  }

  return inner;
}

const closure = outer();
console.log(closure());


const roadmaps = ['JavaScript', 'React', 'Node.js'];

roadmaps.forEach(roadmap => roadmap + ' Roadmap');

let apple = 'apple';
 apple = 'banana';
console.log(apple);



const person = {
  name: 'hamo',
  age: 2,
};
var myO = Object.create(person);

myO.personality = 'good';
myO.car = 'ferrari';

console.log(myO);


var Arr = new Array(2);// 2 is the length of array
Arr.length; //2
Arr[0];

console.log(Arr, Arr.length, Arr[0]);


var arreay = Array(1,2,3,4,5);
array; // [1,2,3,4,5]
console.log(arreay);



var  myFunction = (a, b) => {
  return a * b; // Function returns the product of a and b
}
var x = myFunction(4, 3);

// Function is called, return value will //end up in x


console.log(x);

var namer = 'ronaldo';
var namer = 'hamo';
console.log(namer);

const people = ['yousef', 'hamo', 'ronaldo'];


console.log(people);
console.table(people);


console.group('Bio:');

console.log('My name is Kolade');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();


const arry111 = [1, 2, [3, 4]];
const arry222 = [5, 6];
const merged = [...arry111, ...arry222].flat();
console.log(merged);



let text = 'peter jordanjjjjjjjjkkkkk';
 
let result = text.length;
 
console.log(result);
 
console.log(text.toLowerCase());
console.log(text.toUpperCase());
 
 
console.log(text.charAt(0))
console.log(text.charAt(text.length - 1))


    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTk5NDc5Mi0xNDNhLTdlZjctYWZkMy1lNzEzNWExYWMwYzMiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0LXN0b3JlIiwiZW1haWwiOiJtb2hhbWVkLnJvdXNoZHlAY3JheW9uLmNvbSIsInBob25lX251bWJlciI6IiIsIm5hbWUiOiJUZXN0IFN0b3JlIiwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMucWF0YXJsaXZpbmcuY29tL2RlZmF1bHRfaW1hZ2VzL01pc3NpbmctQXZhdGFyLnBuZyIsIm5pY2tuYW1lIjoidGVzdC1zdG9yZSIsImxlZ2FjeV91aWQiOiI5OTYzOTEwIiwiaXNfYWRtaW4iOiJGYWxzZSIsInVzZXIiOiJ7XCJzdGF0dXNcIjpcIjFcIixcImxhbmd1YWdlXCI6XCJcIixcImNyZWF0ZWRcIjpcIjE3NTc4MzI2NjZcIixcImFjY2Vzc1wiOlwiMTc1Nzk4ODUwMFwiLFwibG9naW5cIjoxNzU4MDEwMTA5LFwiaW5pdFwiOlwibW9oYW1lZC5yb3VzaGR5QGNyYXlvbi5jb21cIixcInRpbWV6b25lXCI6bnVsbCxcInVpZFwiOlwiOTk2MzkxMFwiLFwicWxuZXh0X3VzZXJfaWRcIjpcIjMwNzA0XCIsXCJuYW1lXCI6XCJUZXN0IFN0b3JlXCIsXCJhbGlhc1wiOlwidGVzdC1zdG9yZVwiLFwiZW1haWxcIjpcIm1vaGFtZWQucm91c2hkeUBjcmF5b24uY29tXCIsXCJwaG9uZVwiOlwiXCIsXCJwYXRoXCI6XCJ1c2VyL3Rlc3Qtc3RvcmVcIixcImltYWdlXCI6XCJodHRwczovL2ZpbGVzLnFhdGFybGl2aW5nLmNvbS9kZWZhdWx0X2ltYWdlcy9NaXNzaW5nLUF2YXRhci5wbmdcIixcImlzX2FkbWluXCI6ZmFsc2UsXCJwZXJtaXNzaW9uc1wiOltdLFwicm9sZXNcIjpbXSxcInN1YnNjcmlwdGlvblwiOm51bGx9Iiwic3Vic2NyaXB0aW9ucyI6W3siSWQiOiI3YWFlMDFiMS00MTM1LTQ3ODEtYjEzYy1kYTM5YmY2NjJmMDEiLCJDb2RlIjoiUUxDLVNVQi0xWUUtMDA1IiwiTmFtZSI6IkRlYWxzIC0gMTIgbW9udGhzIiwiU3RhdHVzIjoiQWN0aXZlIiwiRXhwaXJ5RGF0ZSI6IjIwMjY1MTE0In0seyJJZCI6IjkzOTNlM2U4LWZmZjAtNDM3ZS1iOGI2LTViZTczZDc0Mzk2ZCIsIkNvZGUiOiJRTEMtU1VCLTFZRS0wMDYiLCJOYW1lIjoiU3RvcmVzIDEyIE1vbnRoIiwiU3RhdHVzIjoiQWN0aXZlIiwiRXhwaXJ5RGF0ZSI6IjIwMjY1MTE0In1dLCJyb2xlIjoiQmFzaWNVc2VyIiwiZXhwIjoxNzU5OTk3MzA5LCJpc3MiOiJodHRwczovL3Rlc3QucWF0YXJsaXZpbmcuY29tIiwiYXVkIjoiaHR0cHM6Ly90ZXN0LnFhdGFybGl2aW5nLmNvbSJ9.83fas8QQFfZKAmfMFwEIVY8QYHzn8W7XeXvXodDTDLo";


          const token2 =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTk5MWVjZC04MzFmLTc2ZTQtOWJlZC0wMDE1N2U2YjdiMGQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtaWxvbi1mdXJuaXR1cmUiLCJlbWFpbCI6Im1pbG9uaG9zc3NpbjI1N0BnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIrOTc0MzM4OTAzNjQiLCJuYW1lIjoiTWlsb24gRnVybml0dXJlIiwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMucWF0YXJsaXZpbmcuY29tL2RlZmF1bHRfaW1hZ2VzL01pc3NpbmctQXZhdGFyLnBuZyIsIm5pY2tuYW1lIjoibWlsb24tZnVybml0dXJlIiwibGVnYWN5X3VpZCI6IjgzNTMwMjYiLCJpc19hZG1pbiI6IkZhbHNlIiwidXNlciI6IntcInN0YXR1c1wiOlwiMVwiLFwibGFuZ3VhZ2VcIjpudWxsLFwiY3JlYXRlZFwiOm51bGwsXCJhY2Nlc3NcIjpudWxsLFwibG9naW5cIjpudWxsLFwiaW5pdFwiOm51bGwsXCJ0aW1lem9uZVwiOm51bGwsXCJ1aWRcIjpcIjgzNTMwMjZcIixcInFsbmV4dF91c2VyX2lkXCI6XCIzMjUxOFwiLFwibmFtZVwiOlwiTWlsb24gRnVybml0dXJlXCIsXCJhbGlhc1wiOlwibWlsb24tZnVybml0dXJlXCIsXCJlbWFpbFwiOlwibWlsb25ob3Nzc2luMjU3QGdtYWlsLmNvbVwiLFwicGhvbmVcIjpcIlxcdTAwMkI5NzQzMzg5MDM2NFwiLFwicGF0aFwiOlwidXNlci9taWxvbi1mdXJuaXR1cmVcIixcImltYWdlXCI6XCJodHRwczovL2ZpbGVzLnFhdGFybGl2aW5nLmNvbS9kZWZhdWx0X2ltYWdlcy9NaXNzaW5nLUF2YXRhci5wbmdcIixcImlzX2FkbWluXCI6ZmFsc2UsXCJwZXJtaXNzaW9uc1wiOltcImFjY2VzcyBieXBhc3MgZnJlZXogaW1hZ2VcIl0sXCJyb2xlc1wiOltcInZlcmlmaWVkX3VzZXJcIixcInN1YnNjcmlwdGlvblwiLFwiYnVzaW5lc3NfYWNjb3VudFwiXSxcInN1YnNjcmlwdGlvblwiOm51bGx9Iiwic3Vic2NyaXB0aW9ucyI6W3siSWQiOiI0NzQ1ZDgyMC00ZWY5LTQwYjktYWRjMy02NDUwZjUxZDU2MWIiLCJDb2RlIjoiUUxDLVNVQi0xWUUtMDA1IiwiTmFtZSI6IkRlYWxzIC0gMTIgbW9udGhzIiwiU3RhdHVzIjoiQWN0aXZlIiwiRXhwaXJ5RGF0ZSI6IjIwMjYzMTE0In0seyJJZCI6IjU0Njg4YWM1LWUxZTMtNDVlYi05MzZmLWIzMDY4NmExNTJhOCIsIkNvZGUiOiJRTEMtU1VCLTFZRS0wMDYiLCJOYW1lIjoiU3RvcmVzIDEyIE1vbnRoIiwiU3RhdHVzIjoiQWN0aXZlIiwiRXhwaXJ5RGF0ZSI6IjIwMjYzMjE0In1dLCJjb21wYW5pZXMiOlt7Ik5hbWUiOiJNaWxvbiBGdXJuaXRvcmUgIiwiTG9nbyI6Imh0dHBzOi8vcWxuZmlsZXNkZXYuYmxvYi5jb3JlLndpbmRvd3MubmV0L3NlcnZpY2VzLWltYWdlcy8xYjI0ZWM1Ni00ODNhLTQzMTAtYTVmNi1hOWRjYmY2NDliNTMucG5nIiwiVmVyaWZpZWQiOjEsIlN0YXR1cyI6IlBlbmRpbmciLCJFeHBpcnlEYXRlIjpudWxsfSx7Ik5hbWUiOiJNaWxvbiBGdXJuaXRvcmUgU3RvcmUiLCJMb2dvIjoiaHR0cHM6Ly9xbG5maWxlc2Rldi5ibG9iLmNvcmUud2luZG93cy5uZXQvc2VydmljZXMtaW1hZ2VzLzFiMjRlYzU2LTQ4M2EtNDMxMC1hNWY2LWE5ZGNiZjY0OWI1My5wbmciLCJWZXJpZmllZCI6MSwiU3RhdHVzIjoiUGVuZGluZyIsIkV4cGlyeURhdGUiOm51bGx9XSwicm9sZSI6WyJCYXNpY1VzZXIiLCJ2ZXJpZmllZF91c2VyIiwic3Vic2NyaXB0aW9uIiwiYnVzaW5lc3NfYWNjb3VudCJdLCJwZXJtaXNzaW9uIjpbImFjY2VzcyIsImJ5cGFzcyIsImZyZWV6IiwiaW1hZ2UiXSwiZXhwIjoxNzYwNTY3MTE0LCJpc3MiOiJodHRwczovL3Rlc3QucWF0YXJsaXZpbmcuY29tIiwiYXVkIjoiaHR0cHM6Ly90ZXN0LnFhdGFybGl2aW5nLmNvbSJ9.3trfvkNAH2bIPPNZkZ7BID0MjzPKHVeWyJTVPVLRSFY';