import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  target
);
registerServiceWorker();
