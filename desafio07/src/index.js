import React from 'react';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

import colors from './styles/colors';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </Provider>
  );
}
