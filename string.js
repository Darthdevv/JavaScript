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

const text = 'please visit Microsoft';
const newText = text.replace('Microsoft', 'FaceBook');
console.log(text);
console.log(newText);
