import { MOVIE } from './type/types';

const INITIAL_STATE = {
  id: null,
  movies: []
}

function Reducer(state = INITIAL_STATE, action) {
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

export default Reducer;
