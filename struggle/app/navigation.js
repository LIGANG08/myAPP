/**
 *  2018-1-21 Li Gang react-navigation
 */

// import React from 'react';
// import { StyleSheet, Button, Image } from 'react-native';
// import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14

// import home from '../app/pages/Home';
// import person from '../app/pages/Person';

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: '发现',
//     tabBarIcon: () => (
//       <Image
//         source={require('./images/find.png')}
//         style={[styles.icon, { tintColor: '#FF6347' }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('home')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 30,
//     height: 30,
//   },
// });

// const MyApp = TabNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   column: {
//     screen: home,
//   },
//   person: {
//     screen: person,
//   },
// }, {
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });

// export default MyApp;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Image
          source={require('./images/find.png')}
          style={[styles.icon, { tintColor: '#FF6347' }]}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <Image
          source={require('./images/find.png')}
          style={[styles.icon, { tintColor: '#FF6347' }]}
        />
      ),
    },
  },
});

export default RootTabs;
