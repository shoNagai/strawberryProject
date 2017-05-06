import { combineReducers } from 'redux';
import searchResult from './searchResult';
import postByKey from './posts';
import visibilityFilter from './visibilityFilter'

const eventReducer = combineReducers({
  searchResult,
  postByKey,
  visibilityFilter,
});

export default eventReducer;
