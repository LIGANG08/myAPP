/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Home
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import News from '../components/Home/News';
import Video from '../components/Home/Video';
import Product from '../components/Home/Product';
import Course from '../components/Home/Course';
import Shopping from '../components/Home/Shopping';
import Hot from '../components/Home/Hot';
import Tree from '../components/Home/Tree';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    title: '发现',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-timer' : 'ios-timer-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  render() {
    const pic = {
      uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4290125007,381075359&fm=27&gp=0.jpg',
    };
    return (
      <View style={styles.cont}>
        <ScrollView>
          <View>
            <View style={styles.top}>
              <Image source={pic} style={{ width: '100%', height: 150 }} />
            </View>
            <News />
            <Video />
            <Product />
            <Course />
            <Shopping />
            <Hot />
            <Tree />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    alignItems: 'center',
  },

  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  top: {
    width: '100%',
    backgroundColor: 'silver',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 10,
    width: 372,
  },

  titles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },

  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
