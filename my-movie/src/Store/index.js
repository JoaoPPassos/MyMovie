import {createStore} from 'redux';
import Reducer from '../Store/rootReduce';

const store = createStore(Reducer);

export default store;