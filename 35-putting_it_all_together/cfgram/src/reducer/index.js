import {combineReducers} from 'redux'
import auth from './auth.js'
import userProfile from './user-profile.js'
import userPhotos from './user-photos.js'

export default combineReducers({
  auth,
  userProfile,
  userPhotos,
})
