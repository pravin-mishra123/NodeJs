const fs = require("fs");

const https = require("https");

console.log("hello World");

var a = 902839273847;
var b = 90283094;

// Synchronous code - 
fs.readFileSync("./file.txt", "utf-8")
console.log("This will run after file reading done successfully")


https.get("https://dummyjson.com/products/1", (res) =>{
    console.log("fetched Data successfully");
})


setTimeout(() =>{
    console.log("set timeout called after 5 seconds")
},5000);

// asynchronous code
fs.readFile("./file.txt", "utf-8", (err, data)=>{
    console.log("File Data", data);
})

function multiplyFun (x,y){
    const result  = a *b;
    return result;
}

var c = multiplyFun(a,b);
console.log("Multiplication result is: ", c)