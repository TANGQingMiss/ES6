//constant Number.EPSILON = 2^-52
if(0.1 + 0.2 === 0.3){
	console.log("0.1+0.2===0.3");
}else console.log("0.1+0.2 !== 0.3");

//while use Number.EPSILON
if(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON){
	console.log("0.1+0.2===0.3");
}else console.log("0.1+0.2 !== 0.3");


//Max/Min safe integer
//Number.MAX_SAFE_INTEGER = 2 ^ 53 - 1
if(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2){
	console.log("true");
}else console.log("false");
if(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1){
	console.log("true");
}else console.log("false");
if(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2){
	console.log("true");
}else console.log("false");
//same for Number.MIN_SAFE_INTEGER - (2 ^ 53 - 1)

//method: isFinite()
console.log(Number.isFinite(1));
console.log(Number.isFinite(0.1));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(-Infinity));
//method: isNaN()
console.log(Number.isNaN(NaN));

//parseInt() and parseFloat();
console.log(Number.parseInt('12.34'));
console.log(Number.parseInt('11001',2));
console.log(Number.parseFloat('12.34asd'));

//Math.sqrt()
//Math.cbrt() - calculate cube root
//Math.imul()
console.log(Math.imul(1,2));
//Math.hypot - return sqrt of all pow(i,2)
console.log(Math.hypot(3,4,5));
console.log(Math.hypot());
console.log(Math.hypot(1,2,'3'));

//Math.trunc - return int part
console.log(Math.trunc(-0.5));
console.log(Math.trunc(0.5));
console.log(Math.trunc('3.44'));
