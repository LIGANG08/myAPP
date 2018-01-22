/**
 * Sample React Native App
 * https://github.com/facebook/react-native 2018-1-22 Li gang Person
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
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
    };
    return (
      <View style={styles.cont}>
        <View style={{ marginTop: 10 }}>
          <Image source={pic} style={{ width: 360, height: 150 }} />
        </View>
        <View>
          <View style={styles.container}>
            <FlatList
              data={[
                { key: 'Devin' },
                { key: 'Jackson' },
                { key: 'James' },
                { key: 'Joel' },
                { key: 'John' },
                { key: 'Jillian' },
                { key: 'Jimmy' },
                { key: 'Julie' },
              ]}
              renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    // paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
