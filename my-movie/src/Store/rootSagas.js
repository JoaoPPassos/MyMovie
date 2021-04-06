import {all} from 'redux-saga/effects';

import loadMovies from './Sagas';

export default function* rootSaga(){
  yield all([loadMovies()]);
}