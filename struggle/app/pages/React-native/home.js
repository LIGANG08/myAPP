/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, FlatList, TabBarIOS } from 'react-native';

export default class Main extends Component<{}> {
  render() {
    const pic = {
      uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=161888459,1712714238&fm=27&gp=0.jpg',
    };
    return (
      <View style={styles.cont}>
        <View style={styles.logo}>
          <Text>发现</Text>
        </View>
        <ScrollView>
          <View>
            <View style={styles.top}>
              <Image source={pic} style={{ width: 350, height: 150 }} />
            </View>
            <View style={styles.wrap}>
              <View style={styles.title}>
                <Text>极客新闻</Text>
                <Text>查看</Text>
              </View>
              <View style={{
                width: 300, height: 200, backgroundColor: 'red', padding: 10, marginTop: 10,
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
                width: 300, height: 200, backgroundColor: 'red', padding: 10, marginTop: 10,
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
        <View
          style={{
          width: '100%',
          height: 50,
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 0,
          }}
        >
          <TabBarIOS style={{ height: 49 }} tintColor="#FF6347" >
            <TabBarIOS.Item
              style={{ height: 49, width: 100 }}
              systemIcon="bookmarks"
              // icon={require('./发现.png')}
            />
            <TabBarIOS.Item
              style={{ height: 49, width: 100 }}
              systemIcon="contacts"
            />
            <TabBarIOS.Item
              style={{ height: 49, width: 100 }}
              systemIcon="history"
            />
          </TabBarIOS>
        </View>
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
    // padding: 10,
    // backgroundColor: 'red',
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    height: 60,
    backgroundColor: 'silver',
    padding: 0,
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
    width: 360,
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

  footer: {
    position: 'absolute',
    bottom: 10,
  },

});
