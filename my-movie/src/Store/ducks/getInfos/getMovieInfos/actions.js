import { MOVIEDETAILS } from './types';

export const requestMovieDetails = (id) => {
  return {
    type: MOVIEDETAILS.REQUESTDETAILS,
    payload: {
      id
    }
  };
};

export const successMovieDetails = (data) => {
  return {
    type: MOVIEDETAILS.SUCCESSDETAILS,
    payload: {
      data
    }
  };
};