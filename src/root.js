import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Main from './main'

import configureStore from './redux/store/stores';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
        <Provider store = { store }>
          <Main />
        </Provider>
    );
  }
}

