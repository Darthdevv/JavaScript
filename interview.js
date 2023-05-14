// Parsing: Converting a string to a native object
JSON.parse(text);
// Stringification: converting a native object to a string so it can be transmitted across the network
JSON.stringify(object);

console.log(1 +  "2" + "2"); //ans: 122
console.log(1 +  +"2" + "2"); //ans: 32
console.log(1 +  -"1" + "2"); //ans: 02
console.log(+"1" +  "1" + "2"); //ans: 112
console.log( "A" - "B" + "2"); //ans: NaN2
console.log( "A" - "B" + 2); //ans: NaN
// “10,11” == [[[[10]],11]] //10,11 == 10,11, and: true
// "[object Object]" == {name: "test"} //ans true

function foo(){
	return
	{ name: 2 }
}
foo()
 //return undefined

function payTaxes() {
	return 5;
}

console.log(payTaxes());