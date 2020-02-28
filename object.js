//Object.is(val1,val2)
//to check whether two vals are equal, like ===
console.log(Object.is("1","1"));//true
console.log(Object.is("q","q"));//true
console.log(Object.is(3,3.0));//true
console.log(Object.is([1],[1]));//false
console.log(Object.is({q:1},{q:1}));//false

//difference with ===
console.log(Object.is(+0,-0));//false
console.log(+0 === -0);//true
console.log(Object.is(NaN,NaN));//true
console.log(NaN === NaN);//false

//Object.assign(target,source1,...) - copy
let target = {a:1};
let object1 = {b:2};
let object2 = {c:3};
Object.assign(target,object1,object2);
console.log(target);
//can't use null,NaN,undefined
//it's shallow copy


//use of ...
//... is used to take all iterable objects and copy them to current object
let person = {name: "Amy", age: 15};
let	color = {color:'red'};
let someone = { ...person,...color};
console.log(someone);