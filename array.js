//method: Array.of()
//to add all elements to an array
console.log(Array.of(1,2,3,4,'true'));
console.log(Array.of());

//method: Array.from()
//transform array object or iterable object to array
console.log(Array.from([1,2]));
console.log(Array.from([1, ,3]));
console.log(Array.from([1,2,3],(n) => n * 2));

//arraylike object
let arr = Array.from({
	0:'1',
	1:'2',
	2:'3',
	length:3
});
console.log(arr);

let map = new Map();
map.set('key1','value1');
map.set('key2','value2');
console.log(Array.from(map));

//str
console.log(Array.from('abcd'));

//new method: find
let tmp = [1,2,3,4,5];
console.log(tmp.find(item => item > 2));//return first appropriate element
//also findIndex()

//fill
console.log(tmp.fill(0,1,3));//parameter:number,indexStart,indexEnd
//copyWithin()
console.log([3,4,5,6,7].copyWithin(0,2,4));//parameter:indexStart,numberIndex,indexEnd

//entries()
for(let [key,value] of ['a','b'].entries()){
	console.log(key,value);
}

//includes
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(1,1));//number,startIndex
console.log([1,NaN,2].includes(NaN));


//Array buffer
let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);
let buffer1 = buffer.slice(1,3);
console.log(buffer1.byteLength);
