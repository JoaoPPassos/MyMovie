const headers = {
  "method": "GET",
  "headers": {
    'x-rapidapi-key': '3b1d3ffff5mshb39a621c5873fd2p1e8d40jsn06ea080e30ab',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
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
