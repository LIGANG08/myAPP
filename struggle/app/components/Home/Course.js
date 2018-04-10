/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Course
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: '走向大前端',
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
  }, {
    key: 2,
    title: '技术管理',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    auto: '朱赟',
  },
  {
    key: 3,
    title: '中高级工程师的必备技能',
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    auto: '杨文坚',
  },
];

export default class Video extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>精品微课</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} /></View>
          </View>
          <View style={{
            width: Styles.ScreenWidth, padding: 10,
            }}
          >
            {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    display: 'flex',
                    padding: 10,
                    flexDirection: 'row',
                    marginTop: 10,
                    borderRadius: 6,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    }}
                  >
                    <View>
                      <Image source={{ uri: item.uri }} style={{ width: 90, height: 90, borderRadius: 6 }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <View style={{ height: 30 }}>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                      <View style={{ height: 30 }}>
                        <Text style={styles.text}>{item.auto}</Text>
                      </View>
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
    backgroundColor: 'white',
    marginTop: 10,
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
