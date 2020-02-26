//Symbol is a datatype, can't use new (not object)
//show unique value, define the unique property name of object

let sy = Symbol("key1");
 
//manner 1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);

//manner 2:
let syObject2 = {
	[sy]: "kk"
};
console.log(syObject2);

//manner 3
let syObject3 = {};
Object.defineProperty(syObject3,sy,{value:"kk"});
console.log(syObject3);
//can only read its property by [],not by .

//get symbol property, use Object.getOwnPropertySymbols() and Reflect.ownKeys()
//can't be used in for...in for...of
console.log(Object.keys(syObject));
console.log(Object.getOwnPropertySymbols(syObject));
console.log(Reflect.ownKeys(syObject));

//difference with const
//const one = "red";
//const two = "red";//both are right

//while use symbol
//const one = Symbol("red");
//and const two = Symbol("red") isn't right