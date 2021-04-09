export function getDetails(state) {
  return state.getMovieDetails.details;
}

export function getVideosList(state) {
  return state.getMovieDetails.videosIDS;
}

export function getTrailer(state) {
  return state.getMovieDetails.trailer;
}