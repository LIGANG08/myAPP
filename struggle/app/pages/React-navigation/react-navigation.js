/**
 *  2018-1-21 Li Gang react-navigation
 */

import React from 'react';
import { View, Text, Button, TabBarIOS } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Home from '../Home';
import Person from '../Person';
import Column from '../Column';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
    <View
      style={{
      width: '100%',
      height: 50,
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0,
      }}
    >
      <TabBarIOS style={{ height: 49 }} tintColor="#FF6347" >
        <TabBarIOS.Item
          style={{ height: 49, width: 100 }}
          systemIcon="bookmarks"
          // icon={require('./发现.png')}
          onPress={() => navigation.navigate('Home')}
          title="Home"
        />
        <TabBarIOS.Item
          style={{ height: 49, width: 100 }}
          systemIcon="contacts"
          onPress={() => navigation.navigate('Person')}
          title="Person"
        />
        <TabBarIOS.Item
          style={{ height: 49, width: 100 }}
          systemIcon="history"
          onPress={() => navigation.navigate('Column')}
          title="Column"
        />
      </TabBarIOS>
    </View>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'myhone',
    },
  },
  Person: {
    screen: Person,
    navigationOptions: {
      headerTitle: 'Person',
    },
  },
  Column: {
    screen: Column,
    navigationOptions: {
      headerTitle: 'Cl',
    },
  },
});

export default RootNavigator;
