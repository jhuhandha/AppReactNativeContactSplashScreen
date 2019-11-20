import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from './../../components/Header';


class ProductScreen extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header title="Home" />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Product Screen </Text>
          <Button
            title="Volver"
            onPress={() => this.props.navigation.toggleDrawer ()}
          />
        </View>
      </View>
    );
  }
}

export default ProductScreen;
