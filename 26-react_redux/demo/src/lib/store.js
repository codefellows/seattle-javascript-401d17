import {createStore} from 'redux';
import reducer from '../reducer/category.js';

export default () => createStore(reducer);
