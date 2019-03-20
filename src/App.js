import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import 'antd/dist/antd.min.js';

class App extends Component {

  render() {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
