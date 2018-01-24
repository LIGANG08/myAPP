/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Hot
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: 'title',
  }, {
    key: 2,
    title: 'a',
  }, {
    key: 3,
    title: 'name',
  },
];

export default class Product extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>热门专题</Text>
            <View style={styles.titles}><Text>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} /></View>
          </View>
          <ScrollView horizontal>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    width: 300,
                    height: 200,
                    backgroundColor: 'silver',
                    padding: 10,
                    margin: 10,
                    marginTop: 10,
                    }}
                  >
                    <View style={{ flex: 1, backgroundColor: 'black', height: 30 }}><Text>{item.title}</Text></View>
                    <View style={{ flex: 1, backgroundColor: 'skyblue', height: 30 }}><Text>{item.title}</Text></View>
                    <View style={{ flex: 1, backgroundColor: 'steelblue', height: 30 }}><Text>{item.title}</Text></View>
                  </View>
                ))
              }
            </View>
          </ScrollView>
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
    width: Styles.ScreenWidth,
    height: Styles.ScreenHigth,
  },

  titles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },

});
