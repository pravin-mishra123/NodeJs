console.log("Hello World")

var a = 292874892374;
var b = 128310;


setTimeout(() => {
    console.log("set timeout with timer 3 second")
}, 3000);

function multiplyFun (x,y){
    const result = a*b;
    return result;
}


var c = multiplyFun(a,b)
console.log("Miultiplication result is :", c)