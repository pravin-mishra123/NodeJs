// const fs = require("fs");

// const https = require("https");

const crypto = require("crypto");
console.log("hello World");

var a = 902839273847;
var b = 90283094;

// Sync code - it bloack the main thread and v8 engine will struggle to execute this code
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("First key generated successfully");

// Async code
// pbkdf2 - Password based key derivation function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("Second key generated successfully");
})



// Synchronous code - do not use this method , it block the main thread and v8 engine will struggle to execute it

// fs.readFileSync("./file.txt", "utf-8")
// console.log("This will run after file reading done successfully")


// https.get("https://dummyjson.com/products/1", (res) =>{
//     console.log("fetched Data successfully");
// })


// setTimeout(() =>{
//     console.log("set timeout called after 5 seconds")
// },5000);

// asynchronous code
// fs.readFile("./file.txt", "utf-8", (err, data)=>{
//     console.log("File Data", data);
// })

function multiplyFun (x,y){
    const result  = a *b;
    return result;
}

var c = multiplyFun(a,b);
console.log("Multiplication result is: ", c)