/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';

export default class Main extends Component<{}> {
  render() {
    const pic = {
      uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=161888459,1712714238&fm=27&gp=0.jpg',
    };
    // const display = this.state.showText ? this.props.text : ' ';

    return (
      <View style={styles.cont}>
        <View style={styles.logo}>
          <Text>发现</Text>
        </View>
        <ScrollView>
          <View style={styles.top}>
            <Image source={pic} style={{ width: 200, height: 150 }} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{ width: 150, height: 40 }} />
          </View>
        </ScrollView>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>极客新闻</Text>
            <Text>查看 ></Text>
          </View>
          <View style={{
            width: 300, height: 200, backgroundColor: 'red', padding: 10,
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

  cont: {
    backgroundColor: 'white',
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    height: 60,
    backgroundColor: 'silver',
  },

  wrap: {
    alignItems: 'center',
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
    justifyContent: 'center',
    backgroundColor: 'silver',
    width: '100%',
  },

  footer: {
    position: 'absolute',
    bottom: 10,
  },

});
