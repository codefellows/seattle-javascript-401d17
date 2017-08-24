![cf](http://i.imgur.com/7v5ASc8.png) 26: React & Redux
===

## Learning Objectives
* students will be able to use redux with react
* students will be able to design redux reducers for controlling application state
* students will learn to design action creator functions for working with redux

## Resources
* read [redux readme](http://redux.js.org/)
* read [redux core concepts](http://redux.js.org/docs/introduction/CoreConcepts.html)
* read [redux three principles](http://redux.js.org/docs/introduction/ThreePrinciples.html)
* read [redux actions](http://redux.js.org/docs/basics/Actions.html)
* read [redux reducers](http://redux.js.org/docs/basics/Reducers.html)
* read [redux store](http://redux.js.org/docs/basics/Store.html)
* read [redux usage with react](http://redux.js.org/docs/basics/UsageWithReact.html)
* skim [redux motivation](http://redux.js.org/docs/introduction/Motivation.html)

## Overview
#### Redux
* redux is a state container for javascript apps
* it can be used to manage the state of any JS program, not just react apps
* redux holds the whole state of your application within a **single store**
  * the redux store is considered the "single source of truth" for all *application state*
  * some developers go as far as to store all state (application state and view state) on the store
  * a store is read only, much like a React component's `state` or `props`
  * all changes to a store are made with pure functions called reducers

###### reducer
* a redux store is created by passing a function called a **reducer** into `createStore`
* a redux reducer's job is to both define the state of the application and the changes that can be made to that state
* redux reducers have the function signature of `(state, action) => newState`
  * the reducer will be called each time an **action** is _dispatched_
    * whatever state it returns will be the new state of the store

###### store
* a redux store has three primary methods: `getState`, `dispatch`, and `subscribe`

###### dispatch
* each time `dispatch` method is invoked, it's first argument is passed into the reducers action parameter
* in order to update the store you must organize your reducer in a way that enables meaningful changes based on values that are dispatched
* the most common pattern for dispatching meaningful changes to reducers is by always dispatching objects that have a `type` and `payload`
  * the reducer can then make decisions of what to do with the payload based on the type property of the action that was dispatched

``` javascript
// example dispatch usage
store.dispatch({
  type: 'CREATE_NOTE',
  payload: { id: 'abc123', content: 'hello world' },
})
```
people often create convenience functions called "action creators" - these create action objects to be dispatched:

``` javascript
// an action creator for creating notes
const createNote = (note) => ({ type: 'CREATE_NOTE', payload: note })

dispatch(createNote({ id: '123456', content: 'hello again, world' }))
```

###### getState
* invoking `store.getState()` returns the current state of the store

###### subscribe
* `subscribe` allows you to register on change listener functions - these will be called each time the store is dispatched

```
// log the new state after each dispatch
store.subscribe(() => {
  console.log('___STATE___', store.getState())
})
```

#### React Redux
* `react-redux` are the official redux bindings for react
* these include a set of tools that simplify creating react component's that are able to interact with a redux store

###### Provider
* `Provider` is a react component that makes the Redux store available to `connect()` calls in the component hierarchy
* **note:** you will wrap the `Provider` around the rest of your application

###### connect
* `connect` connects a react component to the redux store added to your app's `Provider` component
* `connect` uses `mapStateToProps` and `mapDispatchToProps` to create a higher order function used to wrap a React Component

###### mapStateToProps
`mapStateToProps` is a function that allows you to assign the store's state (or parts of the store's state) to props of a component

###### mapDispatchToProps
`mapDispatchToProps` is a function that allows you to assign methods to a component's props that have access to the store's dispatch method
