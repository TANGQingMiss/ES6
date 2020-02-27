//check whether contains a substring or a character -> indexOf,lastIndexOf
//new method
//1. includes() - return a boolean
let string = 'apple banana orange';
if(string.includes('banana')){
	console.log("string includes this word");
}
//2. startsWith() - return a boolean
if(string.startsWith('app')){
	console.log("string starts with this word");	
}

//3. endsWith() - return a bolean
if(string.endsWith('nana')){
	console.log("string ends with this word");		
}
//these three methods support two params (substring, startIndex);
//while it only returns a boolean
//if need index, use indexOf and lastIndexOf

//4. repeat()
console.log("two".repeat(2));
console.log("three".repeat('3'));
console.log("-1".repeat(-0.5));
console.log("floor".repeat(1.6));
//console.log("error".repeat(-1));//<= -1,Infinity - error
console.log("NaN".repeat(NaN));// = repeat(0)

//completation of string
//5. padStart.padEnd
console.log("h");
console.log("h".padStart(4,'o'));
console.log("h".padEnd(3,'o'));
console.log("h".padStart(3));//default - space
//if given length <= word.length - return original word
console.log("abcde".padEnd(4,'a'));
//if word.length + add.length > given length, delete the last ones
console.log("hello".padEnd(10,",world"));

//string template
//une `` to include string template
console.log(`Hello'\n'world`);
let string1 = `Hey,
				how are you?`;
console.log(string1);

//can include variable
let name = "Dear";
let age = 22;
let info = `My Name is ${name}, I am ${age} years old`;
console.log(info);
//all space and newline are preserved in template