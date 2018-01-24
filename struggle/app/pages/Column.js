/**
 * Sample React Native App
 * https://github.com/facebook/react-native 2018-1-24 Li gang Home
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: '专栏',
    title: '专栏',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-book' : 'ios-book-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  render() {
    const pic = {
      uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=214580340,2910639274&fm=27&gp=0.jpg',
      // http://img4.imgtn.bdimg.com/it/u=214580340,2910639274&fm=27&gp=0.jpg
    };
    return (
      <View style={styles.cont}>
        <View style={{ marginTop: 10 }}>
          <Image source={pic} style={{ width: 360, height: 150 }} />
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
            <View style={{ display: 'flex' }}>
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

  container: {
    flex: 1,
    paddingTop: 22,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 200,
  },

});
