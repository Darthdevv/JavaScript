



let number = [1,2,3,4,5];
let len = number.length - 1;
console.log(len)
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

// Return value of specific item in an object 
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
	return foods[scannedItem];
}

console.log(checkInventory("apples"));
console.log(checkInventory("oranges"));
console.log(checkInventory("mangos"));



var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
var maxi = Math.max(...arr);
console.log(maximus);
console.log(maxi);


const array11 = ["a", "b"];
const elements = [0, 1, 2];
// array11.push.apply(array11, elements); => ['a','b',0,1,2]
// array11.push(elements); => ['a','b',[0,1,2]]
console.info(array11);



    for (var i = 0; i < 5; i++){
      setTimeout(()=>{
        console.log(i);
      },)
    }

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

const kelvin = 293;
const celsius = kelvin - 273;

// convert Celsius to Fahrenheit
let fahrenheit = celsius  * (9 / 5) + 32;

// rounding down the number
fahrenheit = Math.floor(fahrenheit);

// tring interpolation to log the temperature in fahrenheit
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);


let a = 1
if (a) {
  console.log('hello world');
}

let bird = {
  name: 'snoowpic',
  type: 'mockingbird',
  numOfLegs: 2
}

console.log(bird);
console.log(bird.type);
console.log(bird.numOfLegs);
console.log(bird.name);
console.log('yousef');
console.log(Array.from({ length: 20 },(_,i)=> i+1).map(num=> num*2));
console.log(Array.from({ length: 20 }, (_, i) => i + 1).map(num => 1));
console.log({} === []);
console.log({} == []);
console.log(typeof {} == typeof[]);
console.log(typeof {} === typeof []);
console.log(null === '')
console.log(false === !true)
console.log(1 == true)
console.log(0 == false)
console.log('nice job')


// write a function tat returns first element in an array :
function getFirstValue(arr) {
  const firstValue = arr.shift()
  return firstValue;
}

console.log(getFirstValue([5, 2, 3]));
console.log(getFirstValue([-500, 0, 500]));

let aa = [8,5,4,3,2,1];
console.log(aa.values().next().value);

// write a function that returns true if the sum of both numbers are 100 else return false
function isEqualToHundred(num1, num2) {
  return num1 + num2 === 100 ? true : false
}

console.log(isEqualToHundred(50, 10));


function NumOfTrues(arr) {
  const filteredArr =  arr.filter(Boolean)
  return filteredArr.length
}

console.log(NumOfTrues([true, false, true, true]))

// which Generation are you ? 
function whichGeneration(num, char) {
  if (num == -3 && char === 'm') {
    return "great grandfather"
  } else if (num == -3 && char === "f") {
    return "great grandmother";
  } else if (num == -2 && char === "m") {
    return "grandfather";
  } else if (num == -2 && char === "f") {
    return "grandmother";
  }else if (num == -1 && char === "m") {
    return "father";
  }else if (num == -1 && char === "f") {
    return "mother";
  }else if (num == 0 && (char === "f" || char === "m")) {
    return "me!";
  } else if (num == 1 && char === "m") {
    return 'son'
  } else if (num == 1 && char === "f") {
    return 'daughter'
  } else if (num == 2 && char === "m") {
    return 'grandson'
  } else if (num == 2 && char === "f") {
    return 'granddaughter'
  }else if (num == 3 && char === "m") {
    return 'great grandson'
  } else if (num == 3 && char === "f") {
    return 'great granddaughter'
  }
}

console.log(whichGeneration(0, 'm'));

console.log('hello world');

// function factory
function makePlusFunction1(baseNum) {
  return function (num) {
    return baseNum + num;
  }
}

// function factory in arrow function syntax
const makePlusFunction2 = (baseNum) => (num) => baseNum + num;

console.log(100 / 2);
console.log(100 / 0);  // Infinity
console.log(-100 / 0);  // -Infinity


// OOP : 

const organism = {
  dna: Math.random()
}

const fly = Object.create(organism);
console.log(fly.dna);
console.log(Object.getPrototypeOf(fly));

const obj = Object.create({});
Object.defineProperty(obj, 'animal', { value: '🦄' });
console.log(obj.animal);

const object = Object.create({});
Object.defineProperty(object, 'animal', {
  get: () => '🐙'
})
console.log(object.animal);
console.log('this is an object')
console.log('this is an object')

let string = 'fire';
repeatedString = string.repeat(2);
console.log(repeatedString);

//Two Makes Ten :
const makesTen = (a, b) => [a, b, a + b].includes(10);
console.log(makesTen(1, 9));
console.log(makesTen(1, 10));

//Opposite numbers:
function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}
console.log(opposite(-1));


var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let curr = target - nums[i];
    if (obj[curr] && i != obj[curr]) return [i, obj[curr]];
  }
};

console.log(twoSum([1, 2, 3, 4], 7));

// write a function that returns Basic Mathematical Operations:

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// another solution:
const basicOperations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const basicOpe = (op, x, y) => basicOperations[op](x, y);

function squareSum(numbers) {
  let poweredBy = numbers.map((num) => num ** 2);
  let sum= poweredBy.reduce((acc, cur) => acc + cur,0);
  return sum;
}

console.log(squareSum([1, 3]));

// function that mutates array without using Array.map() :
let arrayy = [1, 2, 3];

const map = function (arr, fn) {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArray[i] = fn(arr[i], i);
  }
      return transformedArray;
};

const divide = function (element) {
  return element / 2;
}

console.log(map([10, 20, 30], divide));

console.log('programmig is cool');
console.warn('please check the console');
console.error('Something went wrong :(');
