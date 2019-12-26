import React from 'react';
import './config/reactotronConfig';
import {Provider} from 'react-redux';
import {StatusBar, View} from 'react-native';

import Routes from './routes';
import store from './store';
// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
