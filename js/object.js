let users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 47, occupation: "programmer" },
    { name: "Albert", age: 76, occupation: "programmer" },
];
let filteredUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 40 && users[i].occupation === "programmer") {
        filteredUsers = [...filteredUsers, users[i]];
    }
}
console.log(filteredUsers);

const products = {
    name: 'yousef',
    age: 23,
}
delete products.age;
console.log(products);
console.log(products['age']);


const user = [{
    name: 'yousef',
    age:24
}]

// * optional chaining along with nullish coalising operator
console.log(user[0]?.name ?? 'user does not exist');


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};


for (let key in restaurant.openingHours) {
    console.log(key,restaurant.openingHours[key]);
}

const properties = Object.keys(restaurant.openingHours);
let openStr = `we are open on ${properties.length} days:`
for (let day of properties) {
    openStr += ` ${day},`;
}
console.log(openStr);

const obj = {
  name: 'John',
  age: 25,
  profession: 'Developer',
};

for (let key in obj) {
  console.log(key, obj[key]);
}

const entries = Object.entries(restaurant.openingHours);
for (const [key,{open,close}] of entries) {
    console.log(`on ${key} we open at ${open} and close at ${close}`); 
}

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
const teams = [game.team1,game.team2];

// 1)
// * still works with Object.entries(game.scored)
for (const [i,player] of game.scored.entries()) {
    console.log(`Goal ${+i + 1}: ${player}`);
}

// 2)
// let sum = 0;
// let average;
// let rounded;
// for (const averageOdds of Object.values(game.odds)) {
//     sum += averageOdds;
//     average = sum / 3;
//     rounded = Math.abs(average).toFixed(2);
// }
// console.log(rounded);
// * another solution:
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3)
for (const [team,val] of Object.entries(game.odds)) {
    if (team === 'x') {
        console.log(`Odd of draw: ${val}`)
    } else {
        console.log(`Odd of victory ${team === 'team1' ? teams[0] : teams[1]}: ${val}`);
    }
}
// * another solution
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr}: ${odd}`);
// }

function countOccurrences(arr) {

    let itemCount = {};

    arr.forEach(element => {
        if (!itemCount[element]) {
            itemCount[element] = 1
        } else {
            itemCount[element]++
        }
    });
    return itemCount;
    
}

const myArray = game.scored;
const result = countOccurrences(myArray);
console.log(result);

// * Sets
const mySet = new Set(['pasta', 'pasta', 'pizza']);
console.log(mySet);
console.log(mySet.size);
console.log(new Set('yousefyousefw').size);

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

// * Maps
console.log('hello world');