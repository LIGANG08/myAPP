/**
 *  2018-1-22 Li Gang react-navigation
 */

import { TabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Column from './pages/Column';
import Person from './pages/Person';


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
});

const Navigations = {
  Main: {
    screen: RootTabs,
  },
};


export default Navigations;
