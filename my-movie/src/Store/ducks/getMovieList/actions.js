import { MOVIE } from './types';

export const requestAutoCompleteMovies = (movie) => {
  return {
    type: MOVIE.REQUESTLIST,
    payload: {
      movie
    }
  };
};

export const successAutoCompleteMovies = (data) => {
  return {
    type: MOVIE.SUCCESSLIST,
    payload: {
      data
    }
  };
};
