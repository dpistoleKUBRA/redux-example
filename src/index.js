import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';
import App from './App.js';

const store = createStore(
  reducer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('root'));