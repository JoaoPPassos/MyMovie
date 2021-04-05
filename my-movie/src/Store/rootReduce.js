const INITIAL_STATE = {
  id:null,
  movies:[]
}

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'set/ID':
      return{
        ...state,
        id: state.id 
      }
    case 'set/Movies':
      return{
        ...state,
        movies: state.movies
      }
    default:
      return state
  }
}

export default Reducer;
