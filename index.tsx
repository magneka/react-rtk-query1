import { render } from 'react-dom';
import './style.css';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/state';
import { App } from './src/pages/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
