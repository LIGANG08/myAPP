/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-23 Li gang Home
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
            <View style={styles.wrap}>
              <View style={styles.title}>
                <Text>极客新闻</Text>
                <Text>查看</Text>
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
            <View style={styles.wrap}>
              <View style={styles.title}>
                <Text>精品专栏</Text>
                <Text>查看</Text>
              </View>
              <View style={{
                width: '100%', height: 200, backgroundColor: 'silver', padding: 10, marginTop: 10,
                }}
              >
                <View style={{ flex: 1, backgroundColor: 'black', height: 30 }}><Text>s</Text></View>
                <View style={{ flex: 1, backgroundColor: 'skyblue', height: 30 }}><Text>a</Text></View>
                <View style={{ flex: 1, backgroundColor: 'steelblue', height: 30 }}><Text>b</Text></View>
              </View>
            </View>
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
