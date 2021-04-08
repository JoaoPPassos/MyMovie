import { all } from 'redux-saga/effects';

import loadMovies from './getMovieList/Sagas';
import loadMovieDetails from './getInfos/getMovieInfos/sagas';

export default function* rootSaga() {
  yield all([
    loadMovies(),
    loadMovieDetails()
  ]);
}