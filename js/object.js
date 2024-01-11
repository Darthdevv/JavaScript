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

// 1)
for (const [i,player] of Object.entries(game.scored)) {
    console.log(`Goal ${+i + 1}: ${player}`);
}

// 2)
let sum = 0;
let average;
let rounded;
for (const averageOdds of Object.values(game.odds)) {
    sum += averageOdds;
    average = sum / 3;
    rounded = Math.abs(average).toFixed(2);
}
console.log(rounded);