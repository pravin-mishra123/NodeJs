const fs = require("fs");
const a  =100;

setImmediate(() => console.log("setImmediate executed successfully"));

fs.readFile("./file.txt", "utf-8",() => {
    console.log("File Reading Successfully")
})

setTimeout(() =>{console.log("SetTiomeOut timer expired")}, 0)

function printA (){
    console.log("a :", a)
}

printA();

console.log("Last Line of the Code")


// OutPut
// a:100
// Last line of the code
// Timer Expired
// setImmediate
// File Reading successfully 