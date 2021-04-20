import {
  MOVIEDETAILS,
  MOVIEVIDEOSLIST,
  MOVIETRAILER
} from './types';

const INITIAL_STATE = {
  details: {},
  videosIDS: {},
  trailer: {}
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
      const trailer = action.payload.data;

      console.log(trailer);

      return {
        ...state,
        trailer: trailer ?? {}
      }

    default:
      return state
  }
}