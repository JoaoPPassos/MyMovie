export const autocomplete = (movie) => {
  fetch(`https://imdb8.p.rapidapi.com/auto-complete/${movie}`)
}

