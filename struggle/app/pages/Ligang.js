import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const data = [
  {
    key: 'a',
    name: 'name',
  }, {
    key: 'b',
    name: 'name',
  },
];

export default class HomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={{ height: 300, backgroundColor: 'red', marginTop: 300 }}
          height={200}
          // horizontal={true}
          // autoplay={true}
          // showsButtons={true}
          paginationStyle={{ bottom: 10 }}
        >
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>And simple</Text>
        </Swiper>
        <View>
          {
            data.map(item => (
              <View key={item.key}><Text>{item.key}</Text></View>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    height: 300,
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: 'red',
  },
  wrapper: {
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

