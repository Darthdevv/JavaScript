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


// ? generate an array with random 6 numbers(Integers) from 0 => 10 ES6 syntax
const array3 = Array.from({ length: 6 }, () => Math.floor(10 * Math.random()))
console.log(array3);


// ? Write a JavaScript program to find all unique values in an given array of numbers

function uniqueValues(arr) {
  return new Set(arr)
} 
// * another solution

const unique_Values = (arr) => [...new Set(arr)]

console.log(uniqueValues([1, 1, 2, 3, 3, 3]));
console.log(unique_Values([1, 1, 3, 3, 4, 4, 6, 6]));

// ? Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeArays(arr1,arr2) {
  let mergedArrays = arr1.concat(arr2)
  return [...new Set(mergedArrays)]
}

console.log(mergeArays([1,2,3,"bangladish","egypt",true],[3,4,5,1,"egypt"]));

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

var arry1 = ["Vijendra", "Singh"];
var arry2 = ["Singh", "Shakya"];
// Merges both arrays and gets unique items
var arry3 = arrayUnique(arry1.concat(arry2));
console.log(arry3);


var a = [1, 2, 3], b = [101, 2, 1, 10]
var c = a.concat(b)
var d = c.filter((item, pos) => c.indexOf(item) === pos)

console.log(d);

var m = [undefined, true].filter((x) => x === true);
console.log(m)

// ?  Write a JavaScript function to check whether an `input` is an array or not

function isArray(input) {
  if( Array.isArray(input)) {
    return true
  }else {
    return false
    }
}

console.log(isArray([1,2,3]));
console.log(isArray(Array(5)));
console.log(isArray("[1,2]"));
console.log(isArray("yousef"));
console.log(isArray(true));

// * another solution
const is_Arr = (input) => {
  if (toString.call(input) === "[object Array]") {
    return true 
  } else {
    return false
  }
}

console.log(isArray("w3resource"));
console.log(isArray([1, 2, 4, 0]));

// experimenting 
const ar = [1, 2, 3];
const ra ="1"
const ran =1
const rab =true
const rao ={name: "yousef"}

console.log(rao.toString());
console.log(Object.prototype.toString.call(rao));

// ? Write a simple JavaScript program to join all elements of the following array into a string.

