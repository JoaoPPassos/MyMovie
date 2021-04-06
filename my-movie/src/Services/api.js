export async function AutoCompleteGetMovie(movie) {
  const headers = {
    "method": "GET",
    "headers": {
      'X-RapidAPI-Key': 'd356e43c6amsh9c19a440246d261p1f4b8djsncbe0e45d5fd0',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  }

  return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movie}`, headers)
    .then(res => res.json())
    .then((result => {
      console.log(result);
      return result;
    }))
    .catch(err => {
      console.error(err);
    });

}

