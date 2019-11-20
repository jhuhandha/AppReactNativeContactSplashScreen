import React from 'react';
import {View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider} from 'react-redux';

import Routes from './Routes';
import Store from './redux/store';

export default class App extends React.Component {
  componentDidMount () {
    SplashScreen.hide ();
  }

  render () {
    return (
      <ReduxProvider store={Store}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}
