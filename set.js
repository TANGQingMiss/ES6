//Set
//will only include unique value
//+0 === -0
//undefined === undefined
//NaN != NaN, while in set only one can exist

let set = new Set();
set.add(1);
console.log(set);
set.add(2);
console.log(set);
set.add(1);
console.log(set);

let o = {a:1,b:2};
set.add(o);
console.log(set);
set.add({a:1,b:2});
//different objects,even the value is the same
console.log(set);

//array to set
let array = [1,2,3,4,3,2];
let set2 = new Set(array);
console.log(set);
//set to array
let array1 = [...set2];
console.log(array1);

//string to set
let set3 = new Set('hello');
console.log(set);

//usage 1: delete duplicate of array
let array2 = [4,5,6,8,7,3,4]
let set4 = new Set(array2);
console.log([...set4]);

//get union
let union = new Set([...set2,...set4]);
console.log(union);
//get intersection
let intersect = new Set([...set2].filter(x => set4.has(x)));
console.log(intersect);
//get different
let difference = new Set([...set2].filter(x => !set4.has(x)));
console.log(difference);
