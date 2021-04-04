import {createStore} from 'redux';
import counterReducer from '../pages/Services/rootReduce';

const store = createStore(counterReducer);

export default store;