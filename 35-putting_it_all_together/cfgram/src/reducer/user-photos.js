export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
    case 'USER_PHOTOS_SET':
      return payload
    case 'USER_PHOTO_CREATE':
      return [payload, ...state]
    case 'USER_PHOTO_UPDATE':
      return state.map(item => item._id === payload._id ? payload : item)
    case 'USER_PHOTO_DELETE':
      return state.filter(item => item._id !== payload._id)
    case 'LOGOUT':
      return []
    default: 
      return state
  }
}
