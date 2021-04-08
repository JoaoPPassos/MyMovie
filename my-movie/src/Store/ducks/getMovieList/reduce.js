import { MOVIE } from './types';

const INITIAL_STATE = {
  movies: []
}

export default function getMovieList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE.SUCCESSLIST:
      const data = action.payload.data.d;

      return {
        ...state,
        movies: data ?? []
      }

    default:
      return state
  }
}