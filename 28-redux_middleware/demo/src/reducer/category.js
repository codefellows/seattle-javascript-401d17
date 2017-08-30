let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      return state.map(category =>
        category.id === payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id)
    case 'CATEGORY_RESET':
      return initialState
    default:
      return state
  }
}
