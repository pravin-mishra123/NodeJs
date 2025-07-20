const obj = require("./calculateSum");
var name = "Namste NodeJs";

var a = 10;
var b = 20;

// console.log(name);
// console.log(a +b)

// => global object in node

// console.log(global); // it refere to the global object
// console.log (this); // it refer to the empty object {}
// console.log(globalThis); // it refer to the global object in node as well as browser too;
// console.log(globalThis===global); // both are the same global or globalThis

console.log(obj.calculateSum(a, b));
console.log(obj.x);
