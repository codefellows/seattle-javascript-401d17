![cf](http://i.imgur.com/7v5ASc8.png) 28: Redux Middleware
===

## Learning Objectives
* students will be able to create and implement custom middleware for redux
* students will be able to add and implement third party middleware for redux

## Resources
* [redux middleware](http://redux.js.org/docs/advanced/Middleware.html)

## Overview
* redux middleware provides a third-party extension points between dispatching an action at the moment it reaches the reducer
* it can be used for common tasks, such as:
  * logging actions
  * adding `Promise` support
  * making API requests
  * caching
  * throttling
  * etc, etc.
