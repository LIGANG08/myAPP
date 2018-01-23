import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default class HomeComponent extends Component {
  render() {
    // const pic = {
    //   uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4290125007,381075359&fm=27&gp=0.jpg',
    // };
    return (
      <View style={styles.container}>
        <Swiper
          style={{ height: 300, backgroundColor: 'red', marginTop: 300 }}
          height={200}
          horizontal={true}
          autoplay={true}
          showsButtons={true}
          paginationStyle={{ bottom: 10 }}
        >
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.text}>Beautiful</Text>
          <Text style={styles.text}>And simple</Text>
        </Swiper>
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
    // fontWeight: 'bold',
  },
});
