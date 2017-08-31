let validateCategory = (category) => {
  if (!category.id || !category.title || !category.timestamp) {
    throw new Error('VALIDATION ERROR: category must include id, title, and timestamp');
  }
}

let validateCard = (card) => {
  if (!card.id || !card.content || !card.categoryID) {
    throw new Error('VALIDATION ERROR: card must include id, content, and category id');
  }
}

let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let categoryID, categoryCards;

  switch(type) {
    case 'CATEGORY_CREATE':
      validateCategory(payload);
      return {...state, [payload.id] : []};
    case 'CATEGORY_DELETE':
      validateCategory(payload);
      return {...state, [payload.id]: undefined};
    case 'CARD_CREATE':
      validateCard(payload);
      categoryID = payload.categoryID;
      categoryCards = state[categoryID];
      return {...state, [categoryID]: [...categoryCards, payload]};
    case 'CARD_UPDATE':
      validateCard(payload);
      categoryID = payload.categoryID;
      categoryCards = state[categoryID];

      return {
        ...state,
        [categoryID]: categoryCards.map(card => {
          return card.id === payload.id ? payload : card;
        })
      }
    case 'CARD_DELETE':
      validateCard(payload);
      categoryID = payload.categoryID;
      categoryCards = state[categoryID];

      return {
        ...state,
        [categoryID]: categoryCards.filter(card => {
          return card.id !== payload.id
        })
      }
    default:
      return state;
  }
}
