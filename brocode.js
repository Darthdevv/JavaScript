console.log('hello world');

let myFirstName = 'yousef ';
let myLastName = 'tarek';
const FULLNAME = myFirstName + myLastName;
const MYREALNAME = FULLNAME;
console.log(FULLNAME);
console.log(MYREALNAME);
console.log(typeof null);

dog = 'doberman';
console.log(dog);

const yousefAge = new Date().getFullYear() - 1999;
console.log(yousefAge);
console.log(yousefAge,  'hello');

function timeForMilkAndCookies(date) {

  let day = date.getDate();
  let month = date.getMonth();

  if (day === 24 && month === 11) {
    return true
  } else {
    return false
  }
  }
let date = new Date('December 24, 1999');

console.log(timeForMilkAndCookies(date));