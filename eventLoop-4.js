const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() =>{console.log("Timer Expired")}, 0)

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8",() => {

    console.log("File Reading")
})

process.nextTick(()=> {
    process.nextTick(()=> console.log("Inner next tick"))
    console.log("Process.nextTick")
}
)


console.log("Last Line of the Code")