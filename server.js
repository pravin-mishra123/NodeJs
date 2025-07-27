const http = require("http"); // const http = require("node:http") -> this is the core module of node js

const server = http.createServer(function (req, res){
    if(req.url === "/getData"){
        res.end("There is not secreat data")
    }
    res.end("Hello World")
})

server.listen(7777);

