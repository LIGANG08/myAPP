/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Hot
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    uri: 'https://static001.geekbang.org/resource/image/ac/9e/ac8ee8c95891e59388eb3b7c76431a9e.jpg',
  }, {
    key: 2,
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
  }, {
    key: 3,
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
  },
  {
    key: 4,
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
  },
  {
    key: 5,
    uri: 'https://static001.geekbang.org/static/www/img/course_tensorflow.dd05c11.jpg',
  },
];

export default class Product extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>热点专题</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} /></View>
          </View>
          <ScrollView horizontal>
            <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10 }}>
              {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    width: 300,
                    marginLeft: 10,
                    marginTop: 10,
                    borderRadius: 6,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Image source={{ uri: item.uri }} style={{ width: '100%', height: 120, borderRadius: 6 }} />
                    </View>
                  </View>
                ))
              }
            </View>
          </ScrollView>
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

});
