import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Main from './src/Main'

const store = createStore(reducers,applyMiddleware(ReduxThunk))

export default class App extends Component{
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}