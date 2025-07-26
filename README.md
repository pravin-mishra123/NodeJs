# NodeJs
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
        

