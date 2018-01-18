/**
 * 2018-1-18 LiGang
 */
import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image  } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>发现</Text>
        <ScrollView>
        <View style={styles.top}>
          <Text>Hello world!</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 140, height:40}} />
        </View>
        </ScrollView>
      </View>
    );
  }
};

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
  }
});
