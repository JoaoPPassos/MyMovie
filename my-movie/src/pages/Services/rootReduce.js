import todo from '../../JSON/todo.json'

const INITIAL_STATE = {
  todo
}

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { 
        ...state,
        todo:{
          ...todo,
          value: state.todo.value + 1
          }
        }
    case 'counter/decremented':
      return { 
        ...state,
        todo:{
          ...todo,
          value: state.todo.value - 1
        }
      }
    default:
      return state
  }
}

export default counterReducer;
