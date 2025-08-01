# NodeJs
## Web Accessibility WCAG 2.2 Guideline
* Read More about the Web Accessibility => https://www.w3.org/TR/WCAG22/

## Module System in NodeJS

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

## Syntax Error : 
* When code is not able to generate the AST (Abstract Syntax Tree) it will give Syntax error;
* AST => Intepreter
* JavaScript engine have Interpreter and compile both.
* V8 engine handle the garbage collection 
* v8 engine repository =>https://github.com/v8/v8
* https://v8.dev/

## Libuv and Event Loop Documents and Ites phases
* Libuv Documentation: https://libuv.org/
    * path for libuv event loop code : libuv/src/unix/core.c
* Event Loop Documentation: https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
* Thread pool
    * Libuv uses the thread pool,  So thread pool doing file read, crypto , Complex asynchronous task uses the thread. 
    * thread pool size is 4 by default

    * resize the thread pool size by using 
        * process.env.UV_THREADPOOL_SIZE = 2
    * Explore more about thread pool => https://docs.libuv.org/en/v1.x/threadpool.html

    * Libuv also talking to the Operating System to handles the connections request type of events

    * OS level it EPOLL / K queue IOCPs (I/O Completion Ports ) alsorith there to solve the api execution 
        * EPOLL / K queue => Notify to -> Libuv -> event loop -> poll phase -> send call back to -> V8 Engine for executions

    * Read more about the Epool / Kqueue / IOCPs (I/O Completion Ports ) - (OS) - nodejs
        * epoll is a Linux-specific kernel system call that provides a highly efficient mechanism for monitoring multiple file descriptors for I/O readiness. It is a core component of how libuv achieves its non-blocking, event-driven I/O model on Linux systems.
        * In essence, epoll provides the underlying mechanism that allows libuv to efficiently manage and respond to I/O events on Linux, forming a crucial part of its ability to enable non-blocking, asynchronous operations in environments like Node.js.

    * How epoll / kqueue / IOCPs (I/O Completion Ports ) works in libuv:
        * Event Loop Foundation: libuv is built around an event loop, which continuously monitors for events (like incoming network data, file I/O completion, or timer expirations) and dispatches them to corresponding callbacks.
        * I/O Polling: On Linux, libuv utilizes epoll for efficient I/O polling. Instead of repeatedly checking each individual file descriptor (sockets, pipes, etc.) for activity, libuv registers these descriptors with the epoll instance.
        * Kernel-Level Notification: When I/O activity occurs on any of the registered file descriptors, the Linux kernel, via epoll, efficiently notifies libuv about which descriptors are ready for I/O operations (e.g., ready to read data or write data without blocking).
        * Event Dispatching: libuv then processes these epoll events, triggering the appropriate callbacks associated with the ready file descriptors. This allows libuv to handle a large number of concurrent I/O operations without blocking the main event loop thread.
        * Non-Blocking Operations: epoll itself doesn't perform the I/O operations (like reading or writing data); it only notifies libuv when these operations can be performed non-blockingly. libuv then initiates the actual read/write system calls on the ready file descriptors.

        * Key benefits of epoll for libuv:
            * Scalability: epoll is highly scalable, particularly when dealing with a large number of file descriptors, making it ideal for high-performance network applications.
            * Efficiency: It avoids the need for busy-waiting or thread-per-connection models, leading to more efficient resource utilization.
            * Event-Driven Architecture: epoll perfectly aligns with libuv's event-driven design, enabling efficient asynchronous I/O.

    * epoll (Linux) => https://en.wikipedia.org/wiki/Epoll
    * kqueue (Mac OS )=> https://en.wikipedia.org/wiki/Kqueue
    * IOCPs (I/O Completion Ports ) (Window) => https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports

    ### Read about more
    * Read about the File Descriptor (FDS) OR Socet Descriptor => https://en.wikipedia.org/wiki/File_descriptor
    * Read about Event Emmitor
    * Read about streams and buffer
    * Pipes

## Creating Server
* Read about Stream and Buffer in NodeJs => https://nodejs.org/api/stream.html
* Read about Server overview 
* Read about HTTP , FTP , SMTP
* Read about TCP / IP , Packets in networkig 
* Explore about DNS => https://www.cloudflare.com/learning/dns/what-is-a-dns-server/
* Read about PORT => https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/
* Read about Sockets vs Web Sockets


### Creating Server using NodeJs
* const http = require("http"); // const http = require("node:http") -> this is the core module of node js

const server = http.createServer(function (req, res){
    if(req.url === "/getData"){
        res.end("There is not secreat data")
    }
    res.end("Hello World")
})

server.listen(7777);

## Databases SQL & NoSQK - episode 12
* What is database ? Read about More
* Types of databases
    * Relational DB - MySQL, PostgreSQL:
    * NoSQL DB - MongoDB:
    * In-memory DB - Redis:
    * Distributed SQL DB - CockroachDB:
    * Time Series DB - InfluxDB:
    * OO DB - db4o:
    * Graph DB - Neo4j:
    * Hierarchical DB - IBM IMS:
    * Network DB - IDMS:
    * Cloud DB - Amazon RDS:

## Creating Database & Mongodb
* Steps
    * Goto MongoDB website
    * Create free M0 cluster
    * Create a User -> wahtever wish too
    * Get the connection string
    * Search MongoDB Compass and click to download and install it
    * Create Collection
    * Create documents
    * Found ip address error take refrence => https://www.youtube.com/watch?v=tg3XzK5wLPc&t=93s
    * To know about the local IP address => curl -4 ifconfig.me
    * create new database using UI 

* Local setup using nodejs 
    * Install Mongodb npm package
        * npm install mongodb
    * const {MongoClient} = require("mongodb")

    // connect through local URL if installed in the machine
    // const url = 'mongodb://localhost:20323';

    // connect to given connection string url on the browser
    const url = "mongodb+srv://pravinmishra3344:xgTMFASDPPBcFQM6@namastenode.cushngx.mongodb.net/"

    const client = new MongoClient(url);

    const dbName = 'HelloWorld';

    async function main(){
    // use connect method to connect to the server
    await client.connect();
    console.log("Connected Successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    return 'done.';
    }

    main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());

* // Insert the documents
     // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
* // Find All Documents
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
* // count the documents
    // const countResult = await collection.countDocuments({}) // empty object is working as filter
    // console.log("Count Documents", countResult)
* // Find all the documents with a filter of firstname: "Deepika"
    const result = await collection.find({firstName:"Deepika"}).toArray()
    console.log(result)
* Explore more methods through documentation => https://mongodb.github.io/node-mongodb-native/Next/


# Season -2 - Building Project and all theory concepts used in practical manner.
## Episode - 00 - Discuss about which Project to build and follow the Indestries Standard
* Project Name : DevTinder Project

## Episode - 01 Microservices vs Monolith architecture - How to build a project.
* Industries follow the Waterfall Model (SDLC) - Software Development Life Cycle 
    * Requirements ----> Project Manager / Product Manager  + Designer
    * Design -----> Senior Engineer / Team Lead -> They have to deside what are the things required for the project - Tech Stack, Scalability, Security, Monolith or Microservices Architecture etc...
    * Development -----> SDE1 /SDE2/Intern/Sr. Software Eengineer
    * Testing -----> SDET/ QA Engineer etc
    * Deployement -----> DevOps/ Software engineer etc
    * Maintainence -----> Maintain the application , if new feature come follow the same cycle again an again.

    ### Monolith Vs Microservices
    * What is Monolith and Microservice Architecture => https://www.ibm.com/think/topics/monolithic-architecture
    * both architecture used in the Industry but large application follow the Microservices architecture to handle different services seemless.
    * it's totally depends on the use cases and needs
    
    


        

