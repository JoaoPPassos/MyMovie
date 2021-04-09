import { MOVIEDETAILS, MOVIEVIDEOS } from './types';

const INITIAL_STATE = {
  details: {},
  videos: {}
}

export default function getMovieDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIEDETAILS.SUCCESSDETAILS:
      const data = action.payload.data;

      return {
        ...state,
        details: data ?? {}
      }
    case MOVIEVIDEOS.SUCCESSVIDEOS:
      const videoList = action.payload.data;

      return {
        ...state,
        videos: videoList ?? {}
      }

    default:
      return state
  }
}