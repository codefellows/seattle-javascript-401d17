import {combineReducers} from 'redux';
import cardsReducer from './cards.js';
import categoriesReducer from './category.js';

export default combineReducers({
  cards: cardsReducer,
  categories: categoriesReducer
});
