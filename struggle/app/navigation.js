/**
 *  2018-1-24 Li Gang react-navigation
 */

import { TabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Column from './pages/Column';
import Person from './pages/Person';
import Test from './pages/test';

const RootTabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Column: {
    screen: Column,
  },
  Person: {
    screen: Person,
  },
  test: {
    screen: Test,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
  },
});

const Navigations = {
  Main: {
    screen: RootTabs,
  },
};

export default Navigations;
