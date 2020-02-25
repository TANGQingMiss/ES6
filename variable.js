//1. usage of let
//var is used in the global scope
//while let is only used in the nearest {}

//let can only be declared once
let a = 1;
//console.log(a);
//results: a has already been declared

let b = 0;
var c = 1;
//{let d = 5;}
console.log(b); //0
console.log(c); //1
//console.log(d); // d isn't declared
//so,let is suitable for for/while

//2.usage of const
//const declares a non-changeable variable and need to be initilized once declared
//no change - means data type, but the data can change
const PI = "3.1415926";
console.log(PI);
//const AGE;
//missing initialization of this const

