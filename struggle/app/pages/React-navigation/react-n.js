/**
 * 2018-1-21 Li Gang React-navigation excise
 */

import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../React-native/home.js';

const App = StackNavigator({
  Main: { screen: MainScreen },
  Home: { screen: Home },
});

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ width: '100%', height: 120 }}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

export default App;
