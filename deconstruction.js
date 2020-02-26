//Array
//1.basic
let [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);

//2.nesting
let [d,[[e],f]] = [4,[[5],6]];
console.log(d);
console.log(e);
console.log(f);

//3. ignoring
let [g, ,h] = [7,8,9];
console.log(g);
console.log(h);

//use of ...
let [one,...two] = [1,2,3,4];
console.log(one);
console.log(two);

//string
let [i,j,k,l,m] = 'hello';
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

//Object

//basic
let {foo,bar} = {foo:'aaa',bar:'bbb'};
console.log(foo);
console.log(bar);

//...
let {a2,b2,...rest} = {a2:10,b2:20,c2:30,d2:40};
console.log(a2);
console.log(b2);
console.log(rest);

//default value
let {c3 = 10, d3 = 5} = {c3 : 3};
console.log(c3);

let{e4:ee = 10, f4:ff = 5} = {e4:3};
console.log(ee);