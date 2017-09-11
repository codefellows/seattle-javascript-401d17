// enables us to make async action creators
// which will in turn give us the ability to 
// make action creators that make ajax requests
export default store => next => action => 
  typeof action === 'function'
  ? action(store.dispatch, store.getState) 
  : next(action)
