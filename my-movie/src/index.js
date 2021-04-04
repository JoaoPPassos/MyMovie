import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/FrontEnd/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/index';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);