![cf](http://i.imgur.com/7v5ASc8.png) 21: React Tooling
===

## Learning Objectives
* students will be able to configure webpack.js to build a web application bundle
* students will be able to configure babel to transpile JSX and ES6 to ES5 JavaScript
* students will be able to create and render React components to the DOM
* students will be able to add event listeners to React components
* students will be able to update React component state

## Readings
* [webpack concepts](https://webpack.js.org/concepts/)
* [webpack configuration](https://webpack.js.org/configuration/)
* [react hello world](https://facebook.github.io/react/docs/hello-world.html)
* [introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [rendering elements](https://facebook.github.io/react/docs/rendering-elements.html)

## Overview
#### Webpack
* webpack.js is a module bundler for JS applications
* it compiles modern JavaScript applications into bundles that can be loaded into a browser
* **all of your assets should be managed by webpack**, including `.json`, `.js`, `.css`, `.scss`, `.html`, `.png`, `.jpeg`, `.gif`, additional image files, font files, etc.

##### Plugins
* plugins can be added to webpack to add extra functionality - some examples include:
  * creating HTML files with dynamic script and link tags
  * creating CSS files
  * uglifying and minifying your code
  * creating project global vars at compile time

##### Loaders
* loaders can be added to webpack to transform the source data (code/json/images/etc.) imported into a project
* loaders are configured to only apply their transformations to files that match user defined regular expressions
* loaders can be chained together to transform data - some examples include:
  * transform ES6 files into ES5 files with babel
  * transform SASS files into CSS files
  * transform images/fonts into base64 data embedded into your SASS/CSS

#### React
* react is a component based view and state management library
* react is designed to be declarative, making it "painless" to create interactive UIs
* react can run in browsers and natively on mobile devices

##### Components  
* react components have a render method that returns a view to be rendered to the page
* react developers use JSX to make their applications more readable and have a more expressive workflow when writing React views
* JSX looks like HTML, but gets transpiled to ordinary JavaScript `React.createElement()` invocations by Babel
* react components can also have `state` and `lifecycle hooks`
  * when the state of a React component bound to a view changes, the view will automatically re-render itself, eliminating the pain of manual DOM manipulation under most circumstances
* react components can implement specific methods that will get called at specific points
  * these are called lifecycle hooks
* react components can also pass data into their children through what is called one way data binding
  * we say that React applications have one-way data flow, because data is only passed from the top down
