'use strict';

// groupBy 
let ppl = [
  { name: 'micheal', age: 20 },
  { name: 'jamal', age: 15 },
  { name: 'jeff', age: 22 },
  { name: 'mark', age: 25 },
]

function adultsOnly({age}) {
  if (age >= 21) {
    return 'adult';
  } else {
    return 'minor';
  }
}

const organized = Object.groupBy(ppl, adultsOnly)
console.log(organized);


// toSorted
const prime = [13,7,17,2];

//using sort()
const sortPrime1 = prime.sort();
console.log(prime) //=> [2,7,13,17]; // Original array is mutated
console.log(sortPrime1) //=> [2,7,13,17];

//using toSorted()
const sortPrime2 = prime.toSorted();
console.log(prime) //=> [13,7,17,2]; // Original array remains unchanged
console.log(sortPrime2) //=> [2,7,13,17];

//toReversed
const months = ['January', 'February', 'March', 'April', 'May'];

//using reverse()
const reversedMonths1 = months.reverse();
console.log(months) //=> ['May', 'April', 'March', 'February', 'January']; // Original array is altered
console.log(reversedMonths1) //=> ['May', 'April', 'March', 'February', 'January'];

//using toReversed()
const reversedMonths2 = months.toReversed();
console.log(months) //=> ['January', 'February', 'March', 'April', 'May']; // Original array remains unchanged
console.log(reversedMonths2) //=> ['May', 'April', 'March', 'February', 'January'];
