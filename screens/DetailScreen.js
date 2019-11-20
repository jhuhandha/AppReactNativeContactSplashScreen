import React from 'react';
import {View, Text, Button} from 'react-native';

class DetailScreen extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen {this.props.navigation.getParam("id")}</Text>
        <Button title="Volver" onPress={() => this.props.navigation.navigate ('Home')} />
      </View>
    );
  }
}

export default DetailScreen;
