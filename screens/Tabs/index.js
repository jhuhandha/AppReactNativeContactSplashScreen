import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import PersonScreen from './PersonScreen';
import ProductScreen from './ProductScreen';

import Header from './../../components/Header';

const TabNavigator = createMaterialTopTabNavigator (
  {
    Person: PersonScreen,
    Product: ProductScreen,
  },
  {
    initialRouteName: 'Person',
  }
);

const PersonStack = createStackNavigator ({
  Tabs: {
    screen: TabNavigator,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },
});

export default createAppContainer (PersonStack);