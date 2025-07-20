# NodeJs
# Module System in NodeJS

## Sync, Async, setTimeoutZero
* Sync and Async execution 
* setTimeOutZero execution => setTimeout ((this is callback function)=>{},0)
* Blocking main thread using the synch method in node (fileReadSync)
* Non-blobking I/O
* Libuv Github Repo => https://github.com/libuv/libuv
* Asynchronous I/O
* main thread

## Deep Dive into V8 JS engine
* v8 engine takes the code and broken into small tokens (peaces)
* Tokens convert into AST (Abstract Syntax Tree) => https://astexplorer.net/
# Syntax Error : 
* When code is not able to generate the AST (Abstract Syntax Tree) it will give Syntax error;
* AST => Intepreter
* JavaScript engine have Interpreter and compile both.
* V8 engine handle the garbage collection 
* v8 engine repository =>https://github.com/v8/v8
* https://v8.dev/