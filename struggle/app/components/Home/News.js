/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang News
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: 'Android 9.0将禁止开发者使用非官方API',
  }, {
    key: 2,
    title: '2018年全球App营收超860亿美元',
  }, {
    key: 3,
    title: '2018年国内App市场概览：BAT系占据打壁江山',
  }, {
    key: 4,
    title: '国家级大数据工程研究中心落户京东',
  },
];

export default class News extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>极客新闻</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} /></View>
          </View>
          <View style={{
            display: 'flex',
            justifyContent: 'center',
            width: Styles.ScreenWidth,
            padding: 10,
            marginTop: 10,
            }}
          >
            {
              data.map(item => (
                <View
                  key={item.key}
                  style={{
                  width: Styles.ScreenWidth,
                  height: 30,
                  }}
                >
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Ionicons name="ios-pricetag" size={20} style={{ color: 'red' }} />
                    <Text style={{ marginLeft: 10 }}>
                      {item.title}
                    </Text>
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
    width: 70,
  },

});
