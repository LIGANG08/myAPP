/**
 *  2018-1-21 Li Gang react-navigation
 */

import React from 'react';
import { Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14

import home from '../app/pages/Home';
import person from '../app/pages/Person';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => {
      return (
        <Image
          source={require('./images/find.png')}
          style={{ tintColor: '#FF6347', width: 26, height: 26 }}
        />
      );
    },
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('home')}
        title="Go to notifications"
      />
    );
  }
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 26,
//     height: 26,
//   },
// });

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  home: {
    screen: home,
  },
  person: {
    screen: person,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;
