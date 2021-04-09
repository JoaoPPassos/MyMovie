import {
  MOVIEDETAILS,
  MOVIEVIDEOSLIST,
  MOVIETRAILER
} from './types';

const INITIAL_STATE = {
  details: {},
  videosIDS: {},
  trailers: {}
}

export default function getMovieDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIEDETAILS.SUCCESSDETAILS:
      const data = action.payload.data;

      return {
        ...state,
        details: data ?? {}
      }
    case MOVIEVIDEOSLIST.SUCCESSVIDEOSLIST:
      const videoList = action.payload.data;

      return {
        ...state,
        videosIDS: videoList ?? {}
      }

    case MOVIETRAILER.SUCCESSTRAILER:
      const trailers = action.payload.data;

      return {
        ...state,
        trailers: trailers ?? {}
      }

    default:
      return state
  }
}