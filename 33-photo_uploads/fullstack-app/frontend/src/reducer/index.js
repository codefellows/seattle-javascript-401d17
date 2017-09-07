import {combineReducers} from 'redux';
import auth from './auth.js';
import profile from './profile.js';

export default combineReducers({
  auth,
  profile,
})
