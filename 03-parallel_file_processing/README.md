![cf](http://i.imgur.com/7v5ASc8.png) 03: Parallel File Processing
=====================================

## JS Runtime Resources
* Watch [what the heck is the event loop anyway]

## fs Module Resources
* Read [fs module docs]

## Learning Objectives
* students will be able to create asynchronous programs using the node.js callback pattern
* students will be able to read, write, and encode binary data using the `Buffer` class
* students will be able to utilize the built-in `fs` module for basic file system I/O
* students will be able to use the `done` parameter (provided by mocha.js) for creating asynchronous tests

#### Advanced JS & Asynchronous Programming in NodeJS
  * **Hoisting**
    * hoisting is JS default behavior of moving all declarations to the top of the current scope
    * only declarations are hoisted, not the initilization
      * declaring a variable is the actual creation of a variable, not the initilization
        * initilization refers to when a variable is assigned a value
    * hoisting example:
      ```
        adder(num1, num2);

        var num1 = 10;
        var num2 = 20;

        function adder(a, b) {
          return a + b;
        };
      ```
    * in the above example, we are still able to call our `adder` function as the function declaration has been hoisted to the top of the current scope

  * **The Event Loop**
    * the NodeJS event loop operates under a single thread
      * it supports concurrency through the use of events and callbacks
    * NodeJS uses many threads "underneath the hood" (libuv)
      * we are programming at a higher abstraction - removing the need to deal with lower level threading
    * when NodeJS starts up, it processes the input script then begins processing the event loop
    * phases of the event loop:
      * **poll** - retrieve new I/O events
      * **check** - `setImmediate` callbacks are invoked
      * **close callbacks** - connections are closed (`socket.on('close', function(){...})`)
      * **timers** - scheduled callbacks are invoked
      * **I/O callbacks** - executes all callbacks (with the exception of close callbacks, callbacks scheduled by timers, and `setImmediate`)
      * **idle/prepare** - NodeJS sits in an idle state - only used internally

  * **NodeJS Callback Pattern**
    * a callback is simply a function that is passed as an argument to another function
    * defining an "error first" callback
      * `(err, result)`
      * the first callback is reserved for an error
      * the second callback is reserved for any successful response data
    * no more `if/else` statements!
      * checking for errors first - `if (err) throw err`
      * success code goes below error handling

## Working With Binary Data (Part 1)
  * **High Level Overview**
    * bits and bytes
      * a bit is the smallest unit of data in a computer
      * a bit contains a single binary value, 0 or 1
      * a byte is comprised of 8 bits
        * we often refer to a nibble as 4 bits (half of a byte)
    * endianness
      * refers to the order of bytes
      * little endian
        * bytes are written from left to right
      * big endian
        * bytes are written from right to left

  * **Working with Buffers**
    * buffers are an array of bytes
      * example:
        ```
          var buff = new Buffer('welcome to bufferville');
          console.log(buff);

          <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 62 75 66 66 65 72 76 69 6c 6c 65>
        ```
    * NodeJS [buffer documentation](https://nodejs.org/api/buffer.html#buffer_buffer)
    * common encoding types:
      * utf-8 (default)
        * `buff.toString()`
      * base64
        * `buff.toString('base64')`
      * hex
        * `buff.toString('hex')`

## File System I/O
  * the native NodeJS `fs` module gives us the ability to perform file system I/O operations
  * we'll be using the asynchronous methods `fs.readFile` and `fs.writeFile`
  * **`fs.readFile`**
    * `readFile` creates a readable stream
    * allows us to read the contents of a file

  * **`fs.writeFile`**
    * `writeFile` creates a writable stream
    * allows us to write content to a file

## Asynchronous Testing with MochaJS
  * **Calling `done`**
    * MochaJS gives us 2 sec to call `done` before a timeout error occurs
      * be sure to call `done` in the appropriate location (usually, this in your internal logic)
      * calling `done` in the wrong block will likely cause a false positive test result

<!--links -->
[what the heck is the event loop anyway]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[fs module docs]: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
