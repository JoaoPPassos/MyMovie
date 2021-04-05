import {call, put} from 'redux-saga/effects';
import api from '../Services/api';
import TYPES from '../Store/type/types';

import getMovies from './actions';

export function load(){
  try {
    const response = yield call(api);

    yield put(getMovies(response))
  } catch (err) {
    
  }
}

