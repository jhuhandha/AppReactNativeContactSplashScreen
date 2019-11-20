import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {DrawerNavigatorItems, DrawerItems} from 'react-navigation-drawer';

import styles from './Styles';

export default function (props) {
  let menu = ["Home", "Tabs", "Contacto"];

  return (
    <ScrollView>
      <SafeAreaView>
        <ImageBackground
          source={require ('../assets/background.png')}
          style={{width: undefined, padding: 16, paddingTop: 48}}
        >
          <Image
            source={require ('../assets/profile-pic.jpg')}
            style={styles.profile}
          />
          <Text style={styles.name}>Sophie Stewart</Text>
        </ImageBackground>

        <View
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}
        >
          <DrawerNavigatorItems
            {...props}
            items={props.items.filter(e=>menu.indexOf(e.key) != -1)}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
