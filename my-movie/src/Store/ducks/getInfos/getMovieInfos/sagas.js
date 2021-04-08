import { call, put, takeLatest } from 'redux-saga/effects';
import { successMovieDetails } from './actions';
import { MOVIEDETAILS } from './types';
import { getMovieDetails } from '../../../../Services/api';

export default function* principal() {
  yield takeLatest(MOVIEDETAILS.REQUESTDETAILS, loadMovieDetails);
}

function* loadMovieDetails({ payload }) {
  try {
    const response = yield call(getMovieDetails, payload.id);

    yield put(successMovieDetails(response));
  } catch (err) {

  }
}