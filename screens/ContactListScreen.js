import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {Row, Col} from 'react-native-easy-grid';
import {List, Button, ActivityIndicator} from 'react-native-paper';

import {add_contact, list_contact} from '../redux/actions/contacto.action';

class ContactListScreen extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      contactos: [],
    };
  }

  async componentWillMount () {
    this.props.listar_contactos ();
  }

  render () {
    console.log(this.props.contactos);
    return (
      <View style={{flex: 1}}>

        {this.props.loading
          ? <ActivityIndicator animating={true} color="#000000" />
          : <FlatList
              data={this.props.contactos}
              renderItem={({item, index, separators}) => (
                <TouchableHighlight>
                  <List.Item
                    key={index}
                    title={item.nombre}
                    description={`Telefono ${item.telefono}, Correo ${item.correo}`}
                    left={props => <List.Icon {...props} icon="folder" />}
                    right={props => <List.Icon {...props} icon="contact" />}
                  />
                </TouchableHighlight>
              )}
            />}

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactos: state.contacto.payload,
    loading: state.contacto.estado,
  };
};

const mapStateToDispatch = dispatch => {
  return {
    listar_contactos: () => dispatch (list_contact ()),
  };
};

export default connect (mapStateToProps, mapStateToDispatch) (
  ContactListScreen
);
