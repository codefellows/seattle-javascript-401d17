import superagent from 'superagent'

// sync action creators
export const userProfileCreate = (profile) => ({
  type: 'USER_PROFILE_CREATE',
  payload: profile,
})

export const userProfileUpdate = (profile) => ({
  type: 'USER_PROFILE_UPDATE',
  payload: profile,
})

// async action creators
export const userProfileCreateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then(res => {
    dispatch(userProfileCreate(res.body))
    return res
  })
}

export const userProfileUpdateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.put(`${__API_URL__}/profiles/${profile._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then(res => {
    dispatch(userProfileCreate(res.body))
    return res
  })
}

export const userProfileFetchRequest = () => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.get(`${__API_URL__}/profiles/me`)
  .set('Authorization', `Bearer ${auth}`)
  .then(res => {
    dispatch(userProfileCreate(res.body))
    return res
  })
}
