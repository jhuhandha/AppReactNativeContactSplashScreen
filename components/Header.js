import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class Header extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props.navigation.state.params);
  }

  _goBack = () => console.log('Went back');

  _openDrawer = () => this.props.navigation.toggleDrawer ()

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title={""}
        />
        <Appbar.Action icon="menu" onPress={this._openDrawer} />
      </Appbar.Header>
    );
  }
}

export default withNavigation(Header);  