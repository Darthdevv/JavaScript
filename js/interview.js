'use strict';



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
// console.log({} === []);
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
let repeatedString = string.repeat(2);
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

// console.log('programmig is cool');
// console.warn('please check the console');
// console.error('Something went wrong :(');


const fullname = { first: "yousef", last: "gohary" };
const title = { role: "frontend developer", company: "google" };
const applicantInfo1 = Object.assign({}, fullname, title);
const applicantInfo2 = { ...fullname, ...title };
console.log(applicantInfo1);
console.log(applicantInfo2);

let students = 1;
students += 1; // augmented assignment opperator

// const calcAverage = (num1,num2,num3) => (num1 + num2 + num3) / 3;

const dolphinsAvg1 = calcAverage(44, 23, 71);
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg1 = calcAverage(65, 54, 49);
const koalasAvg2 = calcAverage(23, 34, 27);
console.log(dolphinsAvg1, koalasAvg1);
console.log(dolphinsAvg2, koalasAvg2);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= (2 * avgKoalas)) {
    return `Team Dolphins wins with ${avgDolphins} points`
  } else if(avgKoalas >= 2 * avgDolphins) {
    return `Team koalas wins with ${avgKoalas} points`;
  } else {
    return `None of the teams were able to win`
  }
}

console.log(checkWinner(dolphinsAvg1, koalasAvg1));
console.log(checkWinner(dolphinsAvg2, koalasAvg2));

// we can call functions in arrays as function expressions they produce value and arrays accept them

const calcAge = birthYear => 2024 - birthYear;
const YEARS = [1990, 1967, 1966, 1985];
const AGES = [calcAge(YEARS[0]), calcAge(YEARS[1]), calcAge(YEARS[YEARS.length - 1])];
console.log(AGES);

const SHOWS = ['the last of us', ' house', 'breaking bad'];
const REMOVED = SHOWS.pop();
console.log(SHOWS);
console.log(REMOVED);


function tipCalculator(bill) {
  let tip;
  
  bill >= 50 && bill <= 300
  ? (tip = (bill * 15) / 100)
  : (tip = (bill * 20) / 100);
  
  const TOTAL = bill + tip;
  
  return tip;
  return` the bill was ${bill} , the tip was ${tip}, and the total value is ${TOTAL}`;
}

const bills = [125, 555, 44];

const tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

const total = [
  tipCalculator(bills[0]) + bills[0],
  tipCalculator(bills[1]) + bills[1],
  tipCalculator(bills[2]) + bills[2],
];

console.log(bills, tips, total);


const yousef = {
  firstName: "Yousef",
  lastName: "Gohary",
  birthYear: 1999,
  job: 'Frontend Developer',
  friends: ['yasser', 'nahas'],
  hasDriverLicense: true,
  sayHello: function () {
    return `hello ${this.firstName}`
  },
  age: function () {
    return 2023 - this.birthYear;
  },
  license: function () {
    return this.hasDriverLicense ? "he has a driver license" : "he doesn't have a driver license";
    },
  getSummary: function () {
    return `${yousef.firstName} is a ${yousef.age()} year old ${yousef.job} and ${yousef.license()}`
  }
}
// Dot Notation:
console.log(yousef.age);
console.log(yousef.firstName);

//Bracket Notation:
const nameKey = 'Name';
console.log(yousef['first' + nameKey]);
console.log(yousef['last' + nameKey]);

yousef.location = 'egypt';
yousef['twitter'] = '@yousefg0hary';
console.log(`${yousef.firstName} has ${yousef.friends.length} friends, and his best friend is called ${yousef.friends[1]}`);
console.log(yousef['sayHello']());
console.log(yousef.getSummary());

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return Math.round(this.BMI);
  },
} 
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
     this.BMI = this.mass / (this.height * this.height);
    return Math.round(this.BMI);
  }
}

john.calcBMI();
mark.calcBMI();
console.log(john.BMI, mark.BMI);

function higherBMI() {
  if (john.calcBMI > mark.calcBMI) {
    console.log(`${john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} BMI (${mark.calcBMI()})`)
  } else {
    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} BMI (${john.calcBMI()})`)
  }
}

higherBMI();


for (let i = 1; i <= 10; i++){
  console.log(`Lifting weights repetition ${i} 🏋🏻`);
}


const gohary = [
  'yousef', 24, true, [1, 2, 3]
];

console.log('----looping forward-----')
for (let i = 0; i < gohary.length; i++){
  console.log(gohary[i]);
}

console.log('----looping backwards-----')
for (let i = gohary.length - 1; i >= 0; i--){
  console.log(gohary[i]);
}

let types = [];
for (let i = 0; i < gohary.length; i++){
  console.log(types.push(typeof gohary[i]));
  // types[i] = typeof gohary[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push(2023 - years[i]);
  // ages[i] = 2023 - years[i];
}

console.log(ages);


// for (let exercise = 1; exercise <= 3; exercise++){
//   console.log(`-------Starting exercise ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++){
//     console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
//   }
// }

// let set = 1;
// while (set <= 10) {
//   console.log(`this is set number: ${set}`);
//   set++;
// }

// let randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum)

// while (randomNum !== 6) {
//   console.log(`you rolled a ${randomNum}`);
//   randomNum = Math.floor(Math.random() * 6) + 1;
//   if (randomNum === 6) {
//     console.log('the loop is about to end...');
//   }
// }


const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const TIPS = [];
const TOTALS = [];

function calcTip(bill) {

  for (let i = 0; i < bill.length; i++){
    bill[i] >= 50 && bill[i] <= 300
      ? TIPS.push((bill[i] * 15) / 100)
      : TIPS.push((bill[i] * 20) / 100);
  }
  
  for (let j = 0; j < bill.length; j++){
    TOTALS.push(bill[j] + TIPS[j]); 
  }
  return TOTALS;

}
console.log(calcTip(BILLS));

function calcAverage(arr) {
  let sum = 0;
  for (let k = 0; k < arr.length; k++){
    sum += arr[k];
  }
  return sum / arr.length;
}

console.log(calcAverage(TOTALS));
console.log(calcAverage(TIPS));

const age = birthYear => 2023 - birthYear;
console.log(age(1999));


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function maxMin(arr) {
  let max = arr[0];
  let min = arr[0];


  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof arr[i] !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min)
  return max - min;
}
console.log(maxMin(temperatures));

function maxMinNew(arr1, arr2) {
  const arr = arr1.concat(arr2);
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof arr[i] !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
}
console.log(maxMinNew([1,2,3],[4,5,6]));


const kelvinMeasurement = function () {
  const measurement = {
    type: 'temp',
    unit: 'celesius',
    value: 10,
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(kelvinMeasurement());


function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++){
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  return '...'+ str;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));



// difference between arrow functions and regular functions
function print1() {
  console.log(arguments);
}

console.log(print1('samy', 1, 2));


// const print2 = () => {
//   console.log(arguments);
// };

// print2('hello', 400, false);


const me = {
  name: 'yousef',
  age: 24,
  job: 'pharmacist'
}

console.log('Before graduation: ',me);


// shallow copy
const copyOfMe = Object.assign(me);
copyOfMe.job = 'web developer';
console.log('After graduation: ', copyOfMe);

const obje1 = { a: 0, b: { c: 0 } };
const obje2 = Object.assign({}, obje1);
console.log(obje2);

obje1.a = 3;
console.log(obje1);
console.log(obje2);

// deep copy
const ob1 = { a: 0, b: { c: 0 } };
const ob2 = Object.assign({}, ob1);
const ob3 = structuredClone(ob1);
ob1.b.c = 4;
console.log(ob1);  // {a:0, b:{c:4}}
console.log(ob2);  // {a:0, b:{c:4}}
console.log(ob3);  // {a:0, b:{c:0}}


const nested = [1, 2, [3, 4]];
const [first, , [third, fourth]] = nested;
console.log(first); 
console.log(third); 
console.log(fourth); 
// const [val1, val2] = third;
// console.log(val1);
// console.log(val2);


// mutating variables by destructuring in objects :
let p = 111;
let q = 222;
const objectNow = { p: 1, q: 2, r: 3 };
({ p, q } = objectNow);
console.log(p, q);


const mainMenu = ['pizza', 'pasta', 'fried chicken'];
const starterMenu = ['salad', 'water', 'wine'];
const menu = [...mainMenu, ...starterMenu];
console.log(menu);


console.log(3 && 4);               // => 4
console.log(3 && 'Yousef');        // => 'yousef'
console.log(0 && null);            // => 0
console.log(null && undefined);    // => null
console.log('Hello' && 23 && true && undefined && 'Yousef');   // => undefined
console.log(true && false);   // => false

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
let player1 = [...game.players[0]];
let player2 = [...game.players[1]];
console.log(player1, player2);
// 2)

const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);
// 3)
const allPlayers = [...player1, ...player2];
console.log(allPlayers, allPlayers.length);
for (const player of allPlayers) console.log(player);
for (const player of allPlayers.entries()) console.log(player);
// 4)
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5)
const {  team1, x, team2 } = game.odds;
console.log(team1, x, team2);
// 6)
function printGoals(...names) {
  console.log(`${names.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich')
printGoals(...game.scored)
// 7)
game.odds.team1 < game.odds.team2 && console.log(`${game.team1} is more likely to win`);
game.odds.team1 > game.odds.team2 && console.log(`${game.team2} is more likely to win`);

function findLongestWordLength(str) {
  let longest = '';
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) longest = words[i];
  }
  return longest;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog'));

function confirmEnding(str, target) {
  let myArr = str.split('');
  let lastLetter = myArr[myArr.length - 1];
  if (lastLetter=== target) {
    return true
  } else {
    return false;
  }
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Bastian', 'q'));

const users = [
  { id: 1, name: 'user1', age: 19 },
  { id: 2, name: 'user2', age: 14 },
  { id: 3, name: 'user3', age: 22 },
  { id: 4, name: 'user4', age: 13 },
];

const lastUser = users.findLast(user => user.age < 22);
console.log(lastUser);


// let num1 = Number(prompt('enter a number'));
// let num2 = Number(prompt('enter a number'));

// let result = num1 + num2;
// console.log(result);

let abc = 'abc';
console.log(abc.repeat(3))
const replaced =abc.replace(abc[0],'123');
console.log(replaced)
  
const sayHi = function () {
  return 'hello';
}

let func = sayHi();

console.log(func);
console.log(sayHi());

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


// 2 ways to make every first letter of a string capital:

//using forEach
function titleCase(str) {
  return str
    .toLoweCase()
    .split(' ')
    .forEach(element => {
    element.charAt(0).toUpperCase();
  });
}

console.log(titleCase("I'm a little tea pot"));


//using map along with replace
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(' ');
}

console.log(titleCase('I am a rockstar not a doctor'));



function getIndexToIns(arr, num) {
  let finalArr = [...arr,num];
  finalArr.sort((a, b) => a - b);
  return finalArr.map((element, index) => {
    if (element === num) {
      return index
    }
  }).find(value => typeof value !== 'undefined');
}

console.log(getIndexToIns([40, 60], 50));

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  for (let i = 0; i < users.length; i++){
    console.log(`Full name: ${users[i].name}, Email: ${users[i].email}`);
  }
}
getUsers();

let promise = new Promise(function (resolve, reject) {
  console.log('hello world'); 
})
  
var stringg = 'Amgaderty';
var regx = /^[A-Z][a-z]{3,8}$/;
console.log(regx.test(stringg));


// object destructuring + templete literal + object literal
function addressMaker(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: 'united states',
  }
  console.log(`I live in ${newAddress.city} ${newAddress.state} ${newAddress.country}`)
}

addressMaker({ city: 'cairo', state: 'egypt' });

let incomes = [120, 130, 140];
let sum = 0;
for (let income of incomes) {
  income += 500;
console.log(incomes);
}

function add(...nums) {
  return nums.reduce((x,y) => x + y);
}

console.log(add(1, 2, 3, 4));


if (false) {
  var example34 = 5;
}

console.log(example34);


let letters = 'yousefF ';
for (let letter of letters) {
  console.log(letter.replace('F', 'cau'));
}

// var a = 10;
// var b = function () {
//   console.log(a);
//   var a = 20;
// }

// console.log(b());

const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];

function saveCityZipCode(city, zipCode) {
  return city + zipCode;
}
console.log(saveCityZipCode(city, zipCode));
console.log(address.match(cityZipCodeRegex));

const Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue',
};

function paintCar(car, color) {
  car.color = color;
  return `the ${car.make} is ${car.color}`;
}

console.log(paintCar(Car, 'blue'));

function addMonths(date, months) {
  // Copy the input date to avoid modifying the original date
  const resultDate = new Date(date);

  // Calculate the new month after adding the specified number of months
  const newMonth = resultDate.getMonth() + months;

  // Set the month in the new date object
  resultDate.setMonth(newMonth);

  return resultDate;
}

console.log(addMonths(Date.now(), 4));

function calcAge(birthYear) {
  return 2024 - birthYear;
}

function yearsTillRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  return retirement > 0
    ? `${firstName} has ${retirement} years till retirement`
    : `${firstName} has retired ${Math.abs(retirement)} years ago`;
}

console.log(yearsTillRetirement(1999, 'Yousef'));
console.log(yearsTillRetirement(1955, 'Tarek'));

function calcAges(arr) {
  const ages = arr.map(item => 2024 - item);
  for (const age in ages) {
    console.log(ages[age]);
  }
}
console.log(calcAges([1999, 2004, 1967]));

const MYARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcYear(birthYear) {
  console.log(name);
}

const firstName = 'hamo elsayed';
calcYear();

function playGame1() {
  console.log(this);
}

const playGame2 = function () {
  console.log(this);
};

const playGame3 = () => {
  console.log(this);
};

console.log(this);

playGame1();
playGame2();
playGame3();

// hoisting
function nam() {
  console.log('javascript');
}
var nam = function () {
  console.log('react');
};
console.log('hello decoder');
nam();

//default params
function sayHello(userName, userAge = 24, userSalary) {
  console.log(
    `hello my name is ${userName} my age is ${userAge} and my salary is ${userSalary}`
  );
}

sayHello('yousef', undefined, 30000);

// 3 methods to check if a property is in an object
// 1) in keyword
let yousef = {
  job: 'full stack developer',
  age: 24,
  salary: 32000,
};

console.log('name' in yousef);

// 2) hasOwnProperty
const myObject = yousef;
const propertyName = 'age';
console.log(yousef.hasOwnProperty('salary'));
console.log(myObject.hasOwnProperty(propertyName));

// 3) JSON.stringify().includes();
const stringifiedObject = JSON.stringify(yousef);
console.log(stringifiedObject.includes('job'));

document.body.addEventListener('click', () => console.log(this));

//destructuring nested arrays
const arrr = [1, 2, [3, 4]];
const [t, y, [n, m]] = arrr;
console.log(t, y, n, m);

//default values
const arrrr = [1, 2];
const [v, g, l = 1] = arrrr;
console.log(v, g, l); 

//using both spread operator and rest parameters 

let starterMenuu = ['salad', 'bread', 'water'];
let mainMenuu = ['pizza', 'pasta', 'fish', 'corn'];
// ! spread opearator on right side of assignment operator and rest operator is on the left side
const [pizza, , fish, ...otherfood] = [...mainMenuu, ...starterMenuu];
console.log(pizza, fish, otherfood);


function addNums(...nums) {
  let sum = 0;
  nums.forEach(num => sum += num)
  console.log(sum);
}

addNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let ww = [1, 2, 3];
addNums(...ww);

// nullish values => null and undefined 
// nullish coallising ignores 0 and '' even though they are falsy values


let name = 10;
// name ??= 10;
name &&= 20;
console.log(name);


let yousef = {
  name: 'yousef',
  wife: {
    name: 'aya'
  }
}

const { name:firstname,  wife:{ name:wifename } } = yousef;
console.log(firstname,wifename)