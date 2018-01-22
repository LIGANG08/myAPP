/**
 * Sample React Native App
 * https://github.com/facebook/react-native 2018-1-22 Li gang Person
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: 'Person',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.logo}>
          <Text>我的</Text>
        </View>
        <ScrollView>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: 'silver',
    padding: 0,
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

});
