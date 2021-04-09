import { combineReducers } from 'redux';

import getMovieList from './getMovieList/reduce';
import getMovieDetails from './getInfos/getMovieInfos/reduce';

const rootReducer = combineReducers({
  getMovieList,
  getMovieDetails,
})

export default rootReducer;