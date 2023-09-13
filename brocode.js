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


