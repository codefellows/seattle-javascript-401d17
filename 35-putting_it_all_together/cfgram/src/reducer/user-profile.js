let validateProfileCreate = (profile) => {
  if(!profile.avatar || !profile.bio || !profile._id 
    || !profile.owner || !profile.username || !profile.email){
    throw  new Error('VALIDATION ERROR: profile requires avatar and bio')
  }
}

export default (state=null, action) => {
  let {type, payload} = action
  switch(type){
    case 'USER_PROFILE_CREATE':
      validateProfileCreate(payload)
      return payload
    case 'USER_PROFILE_UPDATE':
      if(!state)
        throw new Error('USAGE ERROR: can not update when profile is null')
      validateProfileCreate(payload)
      return {...state, ...payload}
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
