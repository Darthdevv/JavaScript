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
console.log(array0)


