import { MOVIE } from './types';

const INITIAL_STATE = {
  id: null,
  movies: []
}

export default function getMovieList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE.ID:
      return {
        ...state,
        id: state.id
      }
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