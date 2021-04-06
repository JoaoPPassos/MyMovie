import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducer from '../Store/ducks/rootReducer';
import rootSagas from '../Store/ducks/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;