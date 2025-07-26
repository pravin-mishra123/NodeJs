const fs = require("fs");
const crypto = require("crypto");


process.env.UV_THREADPOOL_SIZE = 5;

// This uses the thread pool 
// fs.readFile("./file.txt", "utf-8", ()=>{
// console.log("file 1 : reading succesfully")
// })
// fs.readFile("./file.txt", "utf-8", ()=>{
// console.log("file 2 : reading succesfully")
// })


// This uses the thread pool 
crypto.pbkdf2("password","salt",50000,50,"sha512",(err, key)=>{
console.log("1: key generated successfully");
})

crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
console.log("2:  key generated successfully");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
console.log("3:  key generated successfully ");
})

crypto.pbkdf2("password","salt",500000,50,"sha512",(err, key)=>{
console.log(" 4:  key generated successfully");
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
console.log("5:  key generated successfully ");
})

