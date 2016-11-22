import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import reducer from 'reducers';

import Home from 'components/home/index.jsx';

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const useDevTools = window.devToolsExtension && window.devToolsExtension();

const store = compose(
  applyMiddleware(thunkMiddleware),
)(createStore)(reducer, useDevTools);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
