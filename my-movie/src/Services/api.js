const headers = {
  "method": "GET",
  "headers": {
    'X-RapidAPI-Key': 'd356e43c6amsh9c19a440246d261p1f4b8djsncbe0e45d5fd0',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
}

export async function AutoCompleteGetMovie(movie) {
  return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movie}`, headers)
    .then(res => res.json())
    .then((result => {
      return result;
    }))
    .catch(err => {
      console.error(err);
    });

}

export async function getMovieDetails(id) {
  return fetch(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, headers)
    .then(res => res.json())
    .then(result => {
      return result;
    })
    .catch(err => {
      console.error(err);
    })
}

export async function getVideo(id) {
  return fetch(`https://imdb8.p.rapidapi.com/title/get-videos?tconst=${id}&limit=100&region=US`, headers)
    .then(res => res.json())
    .then(result => {
      return result
    })
    .catch(err => {
      console.error(err);
    })
}

export async function getTrailer(id) {
  return fetch(`https://imdb8.p.rapidapi.com/title/get-video-playback?viconst=${id}&region=US`, headers)
    .then(res => res.json())
    .then(result => {
      return result
    })
    .catch(err => {
      console.error(err)
    })

}
