import { MOVIEDETAILS } from './types';

const INITIAL_STATE = {
  details: {}
}

export default function getMovieDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIEDETAILS.SUCCESSDETAILS:
      const data = action.payload.data;

      return {
        ...state,
        details: data ?? {}
      }

    default:
      return state
  }
}