import reducer from '../reducer'
import thunk from './redux-thunk.js'
import reporter from './redux-reporter.js'
import {createStore, applyMiddleware} from 'redux'

let appStoreCreate = () => 
  createStore(reducer, applyMiddleware(thunk, reporter)) 

export default appStoreCreate
