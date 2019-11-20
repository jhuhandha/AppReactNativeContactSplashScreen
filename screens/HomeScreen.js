import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {TextInput, Button} from 'react-native-paper';

import Header from './../components/Header';

class HomeScreen extends React.Component {

  // static navigationOptions =  {
  //     title: ""
  // };

  constructor (props) {
    super (props);
    this.state = {
      text: '',
    };
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>

          <TextInput
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState ({text})}
          />

          <TextInput
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState ({text})}
          />

          <TouchableNativeFeedback onPress={() => this.props.navigation.push("Details")}>
            <Button mode="contained" primary>
              Guardar
            </Button>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
