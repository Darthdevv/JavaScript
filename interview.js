



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

console.log('dffdd');