/**
 *  2018-1-24 Li Gang react-navigation
 */

import { TabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Column from './pages/Column';
import Person from './pages/Person';
import Ligang from './pages/Ligang';
// import Test from './pages/test';

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
  Ligang: {
    screen: Ligang,
  },
};

export default Navigations;
