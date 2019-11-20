import React from 'react';

import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ContactCreateScreem from './screens/ContactCreateScreen';
import ContactListScreem from './screens/ContactListScreen';
import TabsScreen from './screens/Tabs';

import SideBar from './components/SideBar';
import Header from './components/Header';

const HomeStack = createStackNavigator ({
  Homes: {
    screen: HomeScreen,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },
});

const DetailsStack = createStackNavigator ({
  Details: {
    screen: DetailScreen,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },
});

const ContactStack = createStackNavigator (
  {
    ContactCreate: {
      screen: ContactCreateScreem,
      navigationOptions: {
        header: props => <Header {...props} />,
      },
    },
    ContactList: {
      screen: ContactListScreem,
      navigationOptions: {
        header: props => <Header {...props} />,
      },
    },
  },
  {initialRouteName: 'ContactList'}
);

const AppDrawer = createDrawerNavigator (
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="home" size={16} color={tintColor} />
        ),
      },
    },
    Details: {
      screen: DetailsStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="list" size={16} color={tintColor} />
        ),
      },
    },
    Contacto: {
      screen: ContactStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="list" size={16} color={tintColor} />
        ),
      },
    },
    Tabs: {
      screen: TabsScreen,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Dimensions.get ('window').width * 0.70,
    hideStatusBar: true,
    contentOptions: {
      activeBackgroundColor: 'rgba(212,118,207, 0.5)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
        borderRadius: 4,
      },
      itemStyle: {
        backgroundColor: 'rgba(212,118,207, 0.1)',
        borderRadius: 4,
        marginTop: 10,
      },
    },
  }
);

export default createAppContainer (AppDrawer);
