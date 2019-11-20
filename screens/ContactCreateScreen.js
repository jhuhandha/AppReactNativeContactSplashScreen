import React from 'react';
import {
  View,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import {Row, Col} from 'react-native-easy-grid';
import {TextInput, Button} from 'react-native-paper';
import { add_contact, list_contact } from '../redux/actions/contacto.action';

class ContactCreateScreen extends React.Component {

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

const mapStateToProps = state => {
    return {
        respuesta_add : state.contacto.mensaje_add,
        error : state.contacto.error,
    };
}

const mapStateToDispatch = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapStateToDispatch)(ContactCreateScreen);
