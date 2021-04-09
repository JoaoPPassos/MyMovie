import { MOVIEDETAILS, MOVIEVIDEOS } from './types';

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

export const requestMovieVideos = (id) => {
  return {
    type: MOVIEVIDEOS.REQUESTVIDEOS,
    payload: {
      id
    }
  }
}

export const successMovieVideos = (data) => {
  return {
    type: MOVIEVIDEOS.SUCCESSVIDEOS,
    payload: {
      data
    }
  }
}