const calcAverage = (num1,num2,num3) => (num1 + num2 + num3) / 3;

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