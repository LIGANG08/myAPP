/**
 *  2018-1-22 Li Gang react-navigation
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import Column from './pages/Column';
import Person from './pages/Person';


const RootTabs = TabNavigator({
  Home: {
    screen: Home,
    // navigationOptions: {
    // tabBarLabel: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
    // },
  },
  Column: {
    screen: Column,
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
    // },
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
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
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

const Navigations = {
  Main: {
    screen: RootTabs,
  },
};


export default Navigations;
