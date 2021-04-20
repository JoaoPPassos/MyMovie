import { call, put, takeLatest } from 'redux-saga/effects';
import { successMovieDetails, successMovieTrailer, successMovieVideos } from './actions';
import { MOVIEDETAILS, MOVIETRAILER, MOVIEVIDEOSLIST } from './types';
import { getMovieDetails, getVideo, getTrailer } from '../../../../Services/api';

export default function* principal() {
  yield takeLatest(MOVIEDETAILS.REQUESTDETAILS, loadMovieDetails);
  yield takeLatest(MOVIEVIDEOSLIST.REQUESTVIDEOSLIST, loadVideos);
  yield takeLatest(MOVIETRAILER.REQUESTTRAILER, loadTrailer);
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

function* loadTrailer({ payload }) {
  try {
    const response = yield call(getTrailer, payload.id);

    yield put(successMovieTrailer(response));
  } catch (err) {

  }
}