![cf](http://i.imgur.com/7v5ASc8.png) 37: AngularJS Overview
====

## Learning Objectives
* students will be able to create a simple AngularJS application

## Readings
* skim [angular developer guide](https://docs.angularjs.org/guide)

## Intro to Angular.js
  * **Overview**
    * **Angular.js** is a JS based front-end web application framework
    * it is built on top of the idea that declarative programming should be used to create UIs and connect functional components
      * imperative programming should be left to defining an application's buisness logic
    * **Angular.js** has a few key design constructs that should be considered when constructing your application
      * decouple DOM manipulation from application logic
      * decouple the client side from the server side
      * provide structure for the full application development life-cycle

  * **CRUD Application**
    * **Angular.js** is excellent at handling most common **CRUD** applications
    * CRUD applications refer to apps that require the use of "create, read, update, and delete" functionality
    * on the backend, we'll be using CRUD operations to interact with the resources in our database
    * on the front-end, we'll use CRUD operations to interact with components in the DOM
      * this provides users with an interface to communicate with the backend

  * **Data Binding**
    * **Angular.js** provides us with out-of-the-box, simple to use, **2 way** data binding that allows for quick, dynamic, transfer of data from the frontend to the backend
    * **Angular.js** uses a `$rootScope` object that will re-render templates on the DOM when values have changed
    * **Angular.js** provides us with an `ng-model` directive that allows you to dynamically set the state of a property on the `$rootScope` - this is automatically handled when applied to an `input` tag
    * when using an `input` tag that controls the state, you can view the effect of template rendering in real time
