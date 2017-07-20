![cf](http://i.imgur.com/7v5ASc8.png) 04: Bitmap Transformer & Event Emitter
=====================================

## Event Emitter Resources
* [events api docs]

## Bitmap Resources
* read [bitmap file format]
* read  [node buffer api docs]
* watch [endian and little endian]

## Learning Objectives
* students will be able to manipulate binary data using the node.js `Buffer` class
* students will be able to architect modular solutions to solving problems

## Overview

#### EventEmitter
* much of the node.js architecture is built around the use of events
* all objects that emit events in node.js are instances of the EventEmitter constructor
* EventEmitter's are a great way to handle controlling asynchronous events
* functions can be registered as listeners for an event on instances of the EventEmitter class
* instances of EventEmitters can emit events and pass the listeners data
* EventEmitters *do not* throw errors if events are emitted - they have no listeners to handle them
  * this can be a very powerful feature and is often used to implement "hooks" and "observables" in many libraries

#### Binary
* you've probably heard that all things in the computer are just a bunch of zeros and ones
  * its true :)
* since 0's and 1's mean almost nothing to humans, we have created rules to convert them into meaningful information
* integers, floating point numbers, and alphanumeric characters are some of the basic things we can turn zeros and ones into
* the process for taking an integer, float, character, or etc. and turning them into zeros and one is called **encoding**
* the process for taking zeros and ones and turning them into an integer, float, character, or etc. is called **decoding**
* binary and hex work a lot like decimal
  * decimal is also referred to as base 10
  * binary is also referred to as base 2
  * hex is also referred to as base 16

```
HOW DECMAL WORKS...

places    43210
_______________
value     06974

6974 base 10 is the same as (6 * 10^3) + (9 * 10^2) + (7 * 10^1) + (8 * 10^0)
6974 base 10 is the same as (6 * 1000) + (9 * 100) + (7 * 10) + (8 * 1)
6974 base 10 is the same as (6000) + (900) + (70) + (8)
6974 base 10 is the same as 6974

----------------------------------------------------------------------

HOW BINARY WORKS

places    43210
_______________
value     01011

1010 base 2 is the same as (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0)
1010 base 2 is the same as (1 * 8) + (0 * 4) + (1 * 2) + (1 * 1)
1010 base 2 is the same as (8) + (0) + (2) + (1)
1010 base 2 is the same as 11

----------------------------------------------------------------------

Hex is the same ...
```
* below is decimal hex binary conversion chart
``` text
DEC |HEX |BIN
--------------
0   |0   |0000
1   |1   |0001   
2   |2   |0010   
3   |3   |0011   
4   |4   |0100   
5   |5   |0101   
6   |6   |0110   
7   |7   |0111   
8   |8   |1000   
9   |9   |1001   
10  |a   |1010   
11  |b   |1011   
12  |c   |1100   
13  |d   |1101   
14  |e   |1110   
15  |f   |1111   
```
* to convert to text there is an encoding called **ascii** - this maps all characters to a corresponding number
* run the command `man ascii` in your command line to see an ascii chart
* modern computing provides us with a character encoding called `utf8` - this is an extension for ascii, that supports multiple languages

#### Buffers - Part 2
* pure javascript is Unicode friendly but not nice to binary data
* when dealing with TCP streams or the file system, it's necessary to deal with octet streams
  * node.js has a few ways of handling, manipulating, consuming, and creating octet streams
  * raw data is stored as instances of the `Buffer` class
  * a buffer is similar to an array of integers, but corresponds to raw memory allocation outside the V8 heap - a `Buffer` cannot be resized
* the `Buffer` class is global, thus removing the need to `require` it in your application
* a `Buffer` represents arrays of bytes
  * a byte is made of of 8 bits
  * a bit is a single one or zero
* each byte in a buffer can be decoded as an integer, floating point number, or a string
* integers and floats come in different sizes: 8bit, 16bit, 32bit...
* strings come in different encodings: 'hex', 'utf8', 'base64'...
* buffers are often referred to as raw data - this just means a bunch of zeros and ones
* many of the node.js APIs use buffers as the data type when dealing with input and output
* your OS stores binary in one of two ways
  * `little endian` - most significant bit first
  * `big endian` - least significant bit first
* in a node **REPL** you can use `os.endianness()` to determine how your os stores bytes
  * `'LE'` - little endian
  * `'BE'` - big endian
* **note:** - make sure that you are using methods that correspond to your system's **endianness**

###### Creating buffers
* `new Buffer(size)` - allocates a new buffer of size octets(bytes)
* `new Buffer(array)` - allocates a new buffer using an array of octets
* `new Buffer(buffer)` - copies the passed buffer data onto a new Buffer instance
* `new Buffer(str, *encoding)` - allocates a new buffer containing a giving string, defaults to `utf8`

###### Buffer - General
* `Buffer.isBuffer(obj)` - test if an object is a Buffer - this will return a boolean
* `Buffer.isEncoding(encoding) ` test if the encoding is valid - this will return a boolean
* `Buffer.byteLength(string, *encoding)` - gives the actual byte length of a string - default encoding is `utf8`
* `buf.length` - returns the size of the buffer in bytes

###### Comparing Buffers
* `buf.equals(otherBuffer)` - returns boolean determining whether this, and another buffer, have the same bytes
* `buf.compare(otherbuffer)` - returns a number indicating whether this is the same as the other buffer in a sort

###### Copying, Slicing, and Concatenating
* `buf.copy(targetBuffer, *targetStart, *sourceStart, *sourceEnd)`
  * create a new buffer
* `buf.slice(*start, *end)`
  * create a new buffer that references the same memory as the old - offset and cropped by start/end
* `Buffer.concat(list, *totalLength)`
  * concatenates the buffer's in the list

###### Indexing a Buffer
* `buf[index]` - get and set the octet at index (just like an array)

###### Fill a Buffer
* `buff.fill(value, *offset, *end)` - fills the buffer with the specified value
  * **offset** - number of bytes into the array - defaults to 0
  * **end** - number of bytes into the array to stop - defaults to `buffer.length`

###### Writing Integers
* `writeUInt16LE(value, offset, *noAssert)`
* `writeUInt32LE(value, offset, *noAssert)`
* `writeUInt8(value, offset, *noAssert)`
* `writeInt16LE(value, offset, *noAssert)`
* `writeInt32LE(value, offset, *noAssert)`
* `writeInt8(value, offset, *noAssert)`
* **value** - number to write
* **offset** - number of bytes into the array
* **noAssert** - boolean - set to true to skip validation of offset

###### Reading Integers
* `readUInt16LE(offset, *noAssert)`
* `readUInt16BE(offset, *noAssert)`
* `readUInt32LE(offset, *noAssert)`
* `readUInt32BE(offset, *noAssert)`
* `readUInt8(offset, *noAssert)`
* `readInt16LE(offset, *noAssert)`
* `readInt16BE(offset, *noAssert)`
* `readInt32LE(offset, *noAssert)`
* `readInt32BE(offset, *noAssert)`
* `readInt8(offset, *noAssert)`
 * **offset** - number of bytes into array
 * **noAssert** - Boolean,  set to true to skip offset validation

###### Writing Strings
* `buf.write(string, *offset, *length, *encoding)`
  * offset defaults to 0
  * encoding defaults to `utf8`
  * if the buffer did not contain enough space to fit the entire string, it will write a partial amount of the string
  * length defaults to `buffer.length`

###### Reading Strings
* `buf.toString(*encoding, *start, *end)` - decodes and returns a string from buffer data
  * **encoding** - string - defaults to `utf8`
  * **start** - number - defaults to 0
  * **end** - number - defaults to `buffer.length`
* converting between buffers and strings requires a specific encoding
  * `acii` - for 7 bit ASCII data
  * `utf8` - for multibyte encoded unicode characters
  * `utf16le` - 2 or 4 bytes, little endian unicode
  * `ucs2` - alias of `utf16le`
  * `base64` - base64 string encoding
  * `hex` - encode each byte as two hexadecimal characters

<!--links -->
[events api docs]: https://nodejs.org/api/events.html
[bitmap file format]: https://en.wikipedia.org/wiki/BMP_file_format
[node buffer api docs]: https://nodejs.org/api/buffer.html
[endian and little endian]: https://www.youtube.com/watch?v=B50mNoVw21k
