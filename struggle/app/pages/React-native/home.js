/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, ScrollView, Text, View, StyleSheet, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Main extends Component<{}> {
  render() {
    const pic = {
      uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=161888459,1712714238&fm=27&gp=0.jpg',
    };
    return (
      <View>
        <View style={styles.wrap}>
          <Text style={styles.title}>发现</Text>
          <ScrollView>
            <View style={styles.top}>
              <Text>Hello world!</Text>
              <Image source={pic} style={{ width: 193, height: 110 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
              {/* <Greeting name='Rexxar' />
              <Greeting name='Jaina' />
              <Greeting name='Valeera' /> */}
              <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{ width: 140, height: 40 }} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 50,
    borderColor: 'black',
    zIndex: 1,
    width: '100%',
    height: 60,
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'silver',
    borderStyle: 'solid',
    // borderBottomWidth: 8,
  },
  top: {
    width: '100%',
    height: 150,
    backgroundColor: 'silver',
    marginTop: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
