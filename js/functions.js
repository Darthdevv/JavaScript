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

function greet(message) {
  return function(name) {
    console.log(`${message} ${name}`)
  }
}

const greeter = greet('hello');
greeter('yousef');
greet('hello')('there !')