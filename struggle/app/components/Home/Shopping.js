/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Shopping
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Video extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>极客商城</Text>
            <Text>进入商城</Text>
          </View>
          <View style={{
            width: 300, height: 200, backgroundColor: 'silver', padding: 10, marginTop: 10,
            }}
          >
            <View style={{ flex: 1, backgroundColor: 'black', height: 30 }}><Text>s</Text></View>
            <View style={{ flex: 1, backgroundColor: 'skyblue', height: 30 }}><Text>a</Text></View>
            <View style={{ flex: 1, backgroundColor: 'steelblue', height: 30 }}><Text>b</Text></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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

});
