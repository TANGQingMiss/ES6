//several params
function f(...values){
	console.log(values.length);
}
f(1,2,3);
f(4,5,3,4,3);

//=> function means params => function body
let f1 = (a,b) => (a + b);
console.log(f1(1,2));
