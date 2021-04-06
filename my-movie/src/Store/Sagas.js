import {call, put,takeLatest} from 'redux-saga/effects';
import {successAutoCompleteMovies} from './actions';
import {MOVIE} from './type/types';
import {AutoCompleteGetMovie} from '../Services/api';

export default function* principal(){
  yield takeLatest(MOVIE.REQUESTLIST, loadMovies);
}

function* loadMovies({payload}){
  console.log("entrou no load movies")
  try {
    const response = yield call(AutoCompleteGetMovie,payload.movie);

    yield put(successAutoCompleteMovies(response));
  } catch (err) {

  }
}

