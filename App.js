import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './src/reducers'
import Main from './src/Main'
import rootSaga from './src/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default class App extends Component{
  render() {
    return (
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  }
}