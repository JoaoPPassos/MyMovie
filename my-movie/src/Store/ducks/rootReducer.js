import {combineReducers} from 'redux';

import getMovieList from './getMovieList/reduce';

const rootReducer = combineReducers({
  getMovieList
})

export default rootReducer;