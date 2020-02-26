//Map
//store key:value,everything can be a key or a value
//key in Map is ordered (FIFO)
//map.size to get numbers or pairs

//initialize: new; set; get
let map = new Map();
map.set("a string","its value");
console.log(map.get("a string"));

//key could also be a functiom
var myFunction = function(){return 0;};
map.set(myFunction,"related function");
console.log(map.get(myFunction));

//traverse of map
let map2 = new Map();
for(let i = 0; i < 5; i++){
	map2.set("2 * "+i,i*2);
}
for(let [key,value] of map2){
	console.log(key + " = " + value);
}

//use entries()
//method entries() return a new iterator
for(let [key,value] of map2.entries()){
	console.log(key + " = " + value);
}

//only show keys
for(let key of map2.keys()){
	console.log(key);
}
//only show values
for(let value of map2.values()){
	console.log(value);
}

//forEach
map2.forEach(function(value,key){
	console.log(key + " = " + value);
},map2);

//map to array
let array = [["key1", "value1"], ["key2", "value2"]];
//2D array to map
let map3 = new Map(array);
//map to 2D array
let array2 =Array.from(map3);

//copy of map
let map4 = new Map(map3);

//combination of map
let merged = new Map([...map,...map2]);
//if there are repetitive key, the later will overpass the former