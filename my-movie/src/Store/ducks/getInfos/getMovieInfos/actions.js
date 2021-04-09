import {
  MOVIEDETAILS,
  MOVIEVIDEOSLIST,
  MOVIETRAILER
} from './types';

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
    type: MOVIEVIDEOSLIST.REQUESTVIDEOSLIST,
    payload: {
      id
    }
  }
}

export const successMovieVideos = (data) => {
  return {
    type: MOVIEVIDEOSLIST.SUCCESSVIDEOSLIST,
    payload: {
      data
    }
  }
}

export const requestMovieTrailer = (id) => {
  return {
    type: MOVIETRAILER.REQUESTTRAILER,
    payload: {
      id
    }
  }
}

export const successMovieTrailer = (data) => {
  return {
    type: MOVIETRAILER.SUCCESSTRAILER,
    payload: {
      data
    }
  }
}