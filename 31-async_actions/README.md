![cf](http://i.imgur.com/7v5ASc8.png) 31: Async Actions
===

## Learning Objectives
* students will be able to create thunk based middleware for redux
* students will be able to create asynchronous action creators

## Readings
* [async actions](http://redux.js.org/docs/advanced/AsyncActions.html)

## Overview
#### Thunk
* redux `thunk` middleware allows you to create action creators that return a function instead of an action
* the "thunk" is used to delay the dispatching of an action or to dispatch an action only if a certain condition is met
* the inner function receives the store methods `dispatch` and `getState` as it's parameters

#### Async Actions
* async actions give us the ability to create requests as part of our actions
* the flow for this generally looks as follows:
``` javascript
// create an action creator - this returns a standard action
export const someAction = (someData) => ({
  type: 'SOME_ACTION',
  payload: someData,
})

// create a function that dispatches an action after async data is received
export const someActionFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/resource-name`)
  .then(res => {
    dispatch(someAction(res.body))
    return res
  })
}
```
