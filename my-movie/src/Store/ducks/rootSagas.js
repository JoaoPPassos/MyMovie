import {all} from 'redux-saga/effects';

import loadMovies from './getMovieList/Sagas';

export default function* rootSaga(){
  yield all([loadMovies()]);
}