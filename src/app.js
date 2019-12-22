import React from 'react';

import {StatusBar, View} from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
