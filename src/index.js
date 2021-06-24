import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import "tachyons"

import FormContainer from './modules/form/form.container';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
  </Provider>,
  document.getElementById('root')
);

