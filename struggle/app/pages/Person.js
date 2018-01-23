/**
 * Sample React Native App
 * https://github.com/facebook/react-native 2018-1-23 Li gang Person
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  render() {
    const pic = {
      uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2817540664,1853282315&fm=27&gp=0.jpg',
      // src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=214580340,2910639274&fm=27&gp=0.jpg',
    };
    return (
      <View style={styles.cont}>
        <View style={{ marginTop: 10 }}>
          <Image source={pic} style={{ width: 360, height: 150 }} />
        </View>
        <View>
          <View style={styles.container}>
            <View style={style}>
              <View style={ion}><Ionicons name="ios-checkbox" size={20} style={{ color: 'orange' }} /><Text>已购</Text></View>
              <View><Ionicons name="ios-arrow-forward" size={25} /></View>
            </View>
            <View style={style}>
              <View style={ions}><Ionicons name="ios-chatbubbles" size={20} style={{ color: '#6699FF' }} /><Text>我的留言</Text></View>
              <View><Ionicons name="ios-arrow-forward" size={25} /></View>
            </View>
            <View style={stylel}>
              <View style={ions}><Ionicons name="ios-heart" size={20} style={{ color: '#FF6633' }} /><Text>我的收藏</Text></View>
              <View><Ionicons name="ios-arrow-forward" size={25} /></View>
            </View>
            <View style={style}>
              <View style={ion}><Ionicons name="ios-settings" size={20} style={{ color: '#6699FF' }} /><Text>设置</Text></View>
              <View><Ionicons name="ios-arrow-forward" size={25} /></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },

  container: {
    flex: 1,
    paddingTop: 22,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  ion: {
    color: 'orange',
  },

});

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: 370,
  padding: 10,
  marginTop: 10,
};

const stylel = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: 370,
  padding: 10,
  marginTop: 2,
};

const ion = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: 64,
};

const ions = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  width: 90,
};
