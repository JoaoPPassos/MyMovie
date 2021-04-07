import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/FrontEnd/Home';
import Movie from './pages/FrontEnd/Movie';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/index';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/movie/:id' exact={true}>
          <Movie />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);