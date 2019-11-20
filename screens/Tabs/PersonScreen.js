import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from './../../components/Header';

class PersonScreen extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Persons Screen</Text>
          <Button
            title="Volver"
            onPress={() => this.props.navigation.toggleDrawer ()}
          />
        </View>
      </View>
    );
  }
}

export default PersonScreen;
