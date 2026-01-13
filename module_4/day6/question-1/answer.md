1. Node.js Architecture

Node.js is built to run JavaScript outside the browser and handle many requests efficiently. It uses an event-driven, non-blocking model.

JavaScript Engine (V8)
V8 is the engine developed by Google that runs JavaScript.
It converts JavaScript code into machine code so the CPU can execute it.
It also handles memory management using garbage collection.
Node.js relies on V8 to execute all JS logic.

Node.js Core APIs
These are built-in modules like fs, http, crypto, path, timers, etc.
They provide features like file handling, networking, and OS interaction.
These APIs look like JavaScript functions, but internally they call native C++ code.

Native Bindings
Native bindings connect JavaScript code to low-level C/C++ libraries.
They allow Node.js to talk to the operating system.
For example, when we use fs.readFile(), the actual file reading is done by native C++ code through these bindings.

Event Loop
The event loop is the heart of Node.js.
It continuously checks:
    Are there any completed tasks?
    Are there any callbacks waiting to run?
It executes tasks one by one without blocking the main thread.
This is how Node.js handles thousands of requests using a single thread.

2. libuv
What is libuv?
libuv is a C library used by Node.js.
It provides support for:
    Asynchronous I/O
    Thread pool
    Event loop
It works behind the scenes and handles all OS-level operations.

Why Node.js needs libuv
JavaScript alone cannot talk directly to the operating system.
libuv allows Node.js to:
    Read files
    Access network
    Use timers
    Run background tasks
It makes Node.js fast and non-blocking.

Responsibilities of libuv
    Managing the event loop
    Running background threads
    Handling file system operations
    Handling networking
    Managing timers and async callbacks

3. Thread Pool
What is a thread pool?
A thread pool is a group of background threads.
These threads perform heavy or slow tasks so the main thread is not blocked.

Why Node.js uses a thread pool
Node.js runs JavaScript in one main thread.
Some operations like file reading or encryption are slow.
To keep Node.js fast, these tasks are sent to the thread pool.

Operations handled by the thread pool
File system operations (fs)
Cryptography (crypto)
DNS lookups
Compression
Some database drivers

4. Worker Threads
What are worker threads?
Worker threads are separate JavaScript threads.
They allow us to run JS code in parallel.

Why worker threads are needed
Heavy calculations can block the event loop.
Worker threads allow CPU-intensive tasks to run in parallel without blocking the main thread.

Difference between Thread Pool and Worker Threads
Thread Pool	                  Worker Threads
Runs C/C++ operations	      Runs JavaScript code
Used internally by Node.js	  Used by developers
Good for I/O tasks	          Good for CPU-heavy tasks

5. Event Loop Queues
Macro Task Queue
Contains tasks like:
    setTimeout
    setInterval
    I/O callbacks
    setImmediate

Micro Task Queue
Contains:
    Promise.then()
    catch
    finally
    process.nextTick()

Execution Priority
    Microtasks run first
    Then macrotasks are executed

Examples:

Microtasks
    Promise resolution
    process.nextTick()

Macrotasks
    Timers
    File read callbacks
    sHTTP request callbacks