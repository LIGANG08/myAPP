/**
 *  2018-1-21 Li Gang react-navigation
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import Column from './pages/Column';
import Person from './pages/Person';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

const RootTabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: () => (
        <Image
          source={require('./images/find.png')}
          style={[styles.icon, { tintColor: '#FF6347'}]}
        />
      ),
    },
  },
  Column: {
    screen: Column,
    navigationOptions: {
      tabBarLabel: '专栏',
      tabBarIcon: () => (
        <Image
          source={require('./images/column.png')}
          style={[styles.icon, { tintColor: '#FF6347' }]}
        />
      ),
    },
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
  Person: {
    screen: Person,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: () => (
        <Image
          source={require('./images/person.png')}
          style={[styles.icon, { tintColor: '#FF6347' }]}
        />
      ),
    },
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
});

export default RootTabs;
