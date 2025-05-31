console.log("demo1")
const text = require('./demo1');
console.log(text);
const {a, b} = require('./demo1');
console.log(`a: ${a}+ b: ${b}`);
//add
const {add, sub} = require('./demo1');
console.log(`add: ${add(3, 4)}`);

const {crs,objj} = require('./demo1');

const tell = objj.objj.name
console.log(`Hello ${tell}, you are ${objj.objj.age} years old!`);
