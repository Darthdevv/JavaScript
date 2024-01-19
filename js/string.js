const named = "ahmad";
console.log(named.toUpperCase());

const add = "$" + (25 + 25) / 100;
console.log(add);

console.log("Items (" + (1 + 1) + ") $" + (2025 + 799) / 100);

let data = new String('hello');
// data = "i am a frontend developer";
console.log(data)

let intro='My name is :'
let myName = '\'yousef\'';
console.log(`my name is ${myName}`)
let introduction = intro + myName;
console.log(introduction);

let cartQuantity = 0;

function showQuantity() {
    console.log(`Cart Quantity is: ${cartQuantity}`)
}

function AddtoCart() {
    cartQuantity += 1;
    console.log(`Cart Quantity is: ${cartQuantity}`);
}
function Add2() {
    cartQuantity += 2;
    console.log(`Cart Quantity is: ${cartQuantity}`);
}

function Add3() { 
    cartQuantity += 3;
        console.log(`Cart Quantity is: ${cartQuantity}`);
}

function resetCart() {
    cartQuantity = 0;
    console.log("Cart was reset");
    console.log(`Cart Quantity is: ${cartQuantity}`);
}

const textt = 'please visit Microsoft';
const newText = textt.replace('Microsoft', 'FaceBook');
console.log(textt);
console.log(newText);


console.log(+'1234'[0]);

const airline = 'TAP air Portugal';
console.log(airline.indexOf('air'));
console.log(airline.slice(4, 7));
console.log(airline.slice(-4));
console.log(airline)

const fullName = 'Yousef El-gohary';
const [firstName, lastName] = fullName.split(' ');
console.log(['Mr', firstName, lastName].join(' '));
const user = 'jessica ann smith davis';


let capitalized = [];
function capitaliseStr(str) {
    let strs = str.split(' ');
    // for (const s of strs) {
    //     capitalized.push(s[0].toUpperCase()+ s.slice(1))
    // }
    for (let i = 0; i < strs.length; i++) {
        // capitalized.push(strs[i][0].toUpperCase()+ strs[i].slice(1))
        capitalized.push(strs[i].replace(strs[i][0],strs[i][0].toUpperCase()))
    }
    return capitalized.join(' ');
}
console.log(capitaliseStr(user));



// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

document.body.append(document
    .createElement('textarea'));
document.body.append(document.createElement('button'));


const Btn = document.querySelector('button');
Btn.addEventListener('click', function convertVariables() {
    const text = document.querySelector('textarea').value;
    const Arr = Array.from(text.split('\n'));
    console.log(Arr)
    const trimmed = Arr.map(item => item.trim());
    const req = trimmed.map(item => item.toLowerCase().split('_'))
    let rows = '';
    for (const [a, b] of req) {
        for (let i = 0; i < 1; i++) {
            rows += '✅';
            console.log(a+b[0].toUpperCase()+b.slice(1)+rows);
        }
    }
    console.log('hello')
    console.log(trimmed)
})

