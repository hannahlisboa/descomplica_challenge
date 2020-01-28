import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import PalavrasCountScreen from '../screens/PalavrasCountScreen';
import PersonagensScreen from '../screens/PersonagensScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: PalavrasCountScreen,
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-home'
    />
  ),
};

HomeStack.path = '';

const PersonagensStack = createStackNavigator(
  {
    Personagens: PersonagensScreen,
  },
  config
);

PersonagensStack.navigationOptions = {
  tabBarLabel: 'Personagens',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='md-person' />
  ),
};

PersonagensStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PersonagensStack,
});

tabNavigator.path = '';

export default tabNavigator;
