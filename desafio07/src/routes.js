import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: '#FFF',
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
