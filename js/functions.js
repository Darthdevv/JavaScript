'use strict';


const flight = 'LH123'
const yousef = {
  name: 'yousef elgohary',
  passport: 247394
}

function checkIn(flightNum,passenger){
  flightNum = 'LH333';
  passenger.name = 'hamo elsayed'

  passenger.passport === 247394 ? console.log('checked In') : console.log('wrong passport')
}

(checkIn(flight, yousef))
console.log(flight, yousef);

// functions returning other functions

// function greet(message) {
//   return function(name) {
//     console.log(`${message} ${name}`)
//   }
// }

// const greeter = greet('hello');
// greeter('yousef');
// greet('hello')('there !')

// ? const greet = (message) => {
// ?  return (name) => {
// ?    console.log(`${message} ${name}`)
// ?  }
// ?}

const greet = message => name => console.log(`${message} ${name}`);
greet('saba7')('azmely');

const lufthanza = {

  airline: 'lufthanza',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} just booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    })
  },

}


const eurowings = {

  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],

};

const swiss = {

  airline: 'swiss',
  iataCode: 'SW',
  bookings: [],

}

// method borrowing:
// eurowings.book = lufthanza.book;
const book = lufthanza.book;

lufthanza.book(23, 'yousef elgohary');
console.log(lufthanza)

// book(25, 'hamo elsayed');  // results in an error due to this keyword is called by function call in strictmode resulting in undefined

// * Call method
book.call(eurowings, 222, 'hamo elsayed');
book.call(lufthanza, 135, 'figo luis');
console.log(eurowings);

// * Apply method
book.apply(swiss, [10, 'mary jane']);
console.log(swiss);

// ! Note : call is more modern and preferred over apply and you can use spread operater along with it
let flightData = [69, 'john wick'];
book.call(swiss, ...flightData);
console.log(swiss);

// * Bind method
const bookLH = book.bind(lufthanza);
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);
const bookSW23 = book.bind(swiss, 23) // *called partial application //
bookSW23('john cena')
console.log(swiss);

// ? with event listeners
lufthanza.planes = 300;
lufthanza.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// * the above code will print the button as the this keyword refers to the element where event listener is attached to it so we need to manually set this keyword using bind() method

const Planes = lufthanza.buyPlane;

document.querySelector('.buy').addEventListener('click', Planes.bind(lufthanza));

// ? partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));
const addVat = addTax.bind(null, 0.22);
console.log(addVat(100))


function addTaxx(rate) {
  return function (value){
    return value + value * rate;
  }
}

// const addTaxx = rate => value => value + value * rate;
const addVatt = addTaxx(0.23);
console.log(addVatt(100));
console.log(addVatt(300));

console.log('end for today')