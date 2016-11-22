import 'babel-polyfill';

// polyfill for ES6 promises, with `onunhandledrejection` event.
import Promise from 'core-js/library/es6/promise';

// polyfill for window.fetch API
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app';

window.Promise = Promise;

ReactDOM.render(
  <App />, document.getElementById('app'),
);
