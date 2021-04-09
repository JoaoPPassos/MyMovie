import { call, put, takeLatest } from 'redux-saga/effects';
import { successMovieDetails, successMovieVideos } from './actions';
import { MOVIEDETAILS, MOVIEVIDEOSLIST } from './types';
import { getMovieDetails, getVideo } from '../../../../Services/api';

export default function* principal() {
  yield takeLatest(MOVIEDETAILS.REQUESTDETAILS, loadMovieDetails);
  yield takeLatest(MOVIEVIDEOSLIST.REQUESTVIDEOSLIST, loadVideos)
}

function* loadMovieDetails({ payload }) {
  try {
    const response = yield call(getMovieDetails, payload.id);

    yield put(successMovieDetails(response));
  } catch (err) {

  }
}

function* loadVideos({ payload }) {
  try {
    const response = yield call(getVideo, payload.id);

    yield put(successMovieVideos(response));
  } catch (err) {

  }
}