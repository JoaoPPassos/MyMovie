import {action} from 'typesafe-actions';
import TYPES from '../Store/type/types';

export const getMovies = (state) => action(TYPES.setMovies);
