/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Shopping
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: '运维体系',
    uri: 'https://wx3.sinaimg.cn/crop.0.0.1242.698.1000/006SQnpEly1fmjtm5idmmj30yi0kcwv5.jpg',
    auto: '赵成',
  }, {
    key: 2,
    title: '走向大前端',
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
  }, {
    key: 3,
    title: '技术管理',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    auto: '朱赟',
  },
];

export default class Video extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>极客商城</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>进入商城</Text><Ionicons name="ios-arrow-forward" size={14} /></View>
          </View>
          <View style={{
            width: Styles.ScreenWidth, height: 200, padding: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'center',
            }}
          >
            {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 10,
                    marginLeft: 5,
                    borderRadius: 6,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Image source={{ uri: item.uri }} style={{ width: 90, height: 90, borderRadius: 6 }} />
                    </View>
                    <View style={{ flex: 1, height: 30, marginTop: 60 }}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                    <View style={{ flex: 1, height: 30 }}>
                      <Text style={styles.text}>{item.auto}</Text>
                    </View>
                  </View>
                ))
              }
          </View>
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
    backgroundColor: 'white',
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: Styles.ScreenWidth,
    height: Styles.ScreenHigth,
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
  },

  titles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 70,
  },

  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

});
