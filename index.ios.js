/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import eventReducer from './src/reducers';
import eventEpic from './src/epics';
import App from './src/App';

import {AppRegistry} from 'react-native';

const epicMiddleware = createEpicMiddleware(eventEpic);

const store = createStore(eventReducer, applyMiddleware(epicMiddleware));

export default class EventViewer extends Component {

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('strawberryProject', () => EventViewer);
