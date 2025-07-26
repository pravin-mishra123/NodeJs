const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() =>{console.log("Timer Expired")}, 0)

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8",() => {
    setTimeout(() =>{console.log("2nd Timer Expired")}, 0)

    process.nextTick(()=> console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading")
})

process.nextTick(()=> console.log("Process.nextTick"))


console.log("Last Line of the Code")


// OutPut
// Last Line of the Code
// Process.nextTick
// Promise
// Timer Expired
// setImmediate
// File Reading
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer Expired