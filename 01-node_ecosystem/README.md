![cf](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
=====================================

## Node.js Resources
* read [about nodejs]
* skim [libuv docs]
* skim [about v8]

## ES6 Resources
* read [just another guide to ES6]
* skim [node and es6 docs]

## NPM Resources
* read [what is npm]

## Testing Resources
* read [a gentle intro to tdd in js]
* read [expect docs](http://chaijs.com/api/bdd/)
* read [mocha getting started guide]

## Learning Objectives
* students will be able to set up a basic node.js project
* students will be able to create custom node.js modules that conform to the CommonJS module pattern
* students will be able to construct and run basic unit tests
* students will be able explain the TDD philosophy of red, green, refactor

#### Using Your Computer Like A Dev
* people often develop bad habits of computer usage - these need to be unlearned
* as a developer, it is **highly important** that you keep your file system organized
* setup a directory for all your class work and don't deviate from working outside of this directory
* here's some helpful tips:
  * never put space bars in your file names
  * use `-` or `_` instead - choose one and stick with it... *don't use both!*
  * don't use capital letters in your file names, unless it's the standard convention (ex: README.md)
    * some file systems (such as osx) don't keep track of casing - this can cause git issues
* example directory structure:
``` text
 * $HOME/
  | - Desktop/
  | - Downloads/
  | - ...
  | - cf-401/
  |   | - labs/
  |   |   | - lab-01-node-echosystem
  |   |   | - lab-02-tools-and-context
  |   |   | - ...
  |   | - lecture-notes/
  |   |   | - class-01-node-ecosystem
  |   |   | - class-02-tools-and-context
  |   |   | - ...
  ```

#### Node.JS
* open source JS framework for programming JS on your operating system
* built for creating dynamic web applications
* built on Chrome’s JS runtime, V8
  * V8 compiles JS to native machine code
  * code ran in the browser gets compiled in V8
* written in C++ (libuv) and JS
* built for asynchronous I/O operations (using libuv)
  * this save developers from having to worry about complicated concurrent programming patterns!
* utilizes an event driven, non-blocking architecture
  * node.js only does work when events are triggered
  * when node.js has no work to be done, it sleeps
* lightweight and efficient
* contains a rich ecosystem of available packages (NPM)
* the node.js docs include a stability index
  * 0 - deprecated - don't use the feature
  * 1 - experimental - don't use this feature in something you care about
  * 2 - stable - fine to use
  * 3 - locked - fine to use

#### NPM
* NPM is the primary package manager for installing javascript in node.js
* NPM is composed of the following
  * a registry where all the packages are hosted
  * a search engine where you can find packages
  * a CLI where that helps you interface with the registry
  * a for profit organization

#### Testing and TDD
* test driven development
* TDD relies on a very short development cycle
  * this encourages developers to create small, testable, features
* TDD process
  * make a plan for the feature(s) needed to make your program work
  * choose a feature to implement
  * write code that tests that feature's behavior
  * your tests should fail - the feature has not been implemented yet
  * create the feature
  * your tests should pass - the feature has been implemented
  * refactor for optimization
  * your tests should still pass - the behavior of your featured should not have changed
    * this is process is referred to as **red, green, refactor**
  * **red** - the test is written, but fails
  * **green** - the test passes - the feature has been implemented
  * **refactor** - the code runs better and all tests still pass

#### Mocha
* what is MochaJS?
  * feature rich JS testing framework
  * gives us access to use `describe` and `it` blocks for greater abstraction
  * globally install MochaJS: `npm install -g mocha`
* what are assertions?
  * expressions that encapsulate logic and are evaluated in a targeted test
  * we create assertion tests to check against our logic
* difference between unit, e2e, and integration testing
  * e2e: tests if the flow of an application, from start to finish, works as expected
  * unit: smallest testable parts of an application are tested
  * integration: phase of testing where individual modules are combined and tested as a group

<!--links -->
[about nodejs]: https://nodejs.org/en/about/
[node and es6 docs]: https://nodejs.org/en/docs/es6/
[libuv docs]: https://github.com/libuv/libuv
[about v8]: https://developers.google.com/v8/
[what is npm]: https://docs.npmjs.com/getting-started/what-is-npm
[a gentle intro to tdd in js]: http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/
[mocha getting started guide]: http://mochajs.org/#getting-started
[just another guide to ES6]: https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.wb7rj1gin
