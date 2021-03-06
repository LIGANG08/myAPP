/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-4-11 Li gang Tree
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: '十年产品经理的故事',
    uri: 'https://static001.geekbang.org/resource/image/00/54/00a2dba698ff4de3ed672e3eb4055d54.png',
    auto: '邱岳',
  }, {
    key: 2,
    title: '人工智能有泡沫吗?',
    uri: 'https://static001.geekbang.org/resource/image/66/62/66fd525c029a3498d770ec0a6a688262.jpg',
    auto: '洪亮劼',
  }, {
    key: 3,
    title: '技术管理',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    auto: '朱赟',
  },
  {
    key: 4,
    title: '从前端小工到 BAT 中高级工程师的必备技能',
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    auto: '杨文坚',
  },
  {
    key: 5,
    title: 'TensorFlow实战——基础班',
    uri: 'https://static001.geekbang.org/static/www/img/course_tensorflow.dd05c11.jpg',
    auto: '郑泽宇',
  },
];

export default class Product extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>二叉树视频</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} style={{ color: 'gray' }} /></View>
          </View>
          <ScrollView horizontal>
            <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10 }}>
              {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    width: 160,
                    marginLeft: 10,
                    marginTop: 10,
                    borderRadius: 6,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    }}
                  >
                    <View style={{
                      flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    }}
                    >
                      <Image source={{ uri: item.uri }} style={{ width: '100%', height: 120 }} />
                      <View
                        style={{
                        width: 30, height: 30, zIndex: 1, backgroundColor: 'black', borderRadius: 20, opacity: 0.8, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -70,
                      }}
                      >
                        <Image source={{ uri: item.uri }} style={{ width: 10, height: 10, borderRadius: 5 }} />
                      </View>
                    </View>
                    <View style={{ marginTop: 50 }}>
                      <View style={{ flex: 1, height: 30 }}>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                      <View style={{ height: 20, marginLeft: 5, marginTop: 15 }}>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item.auto}</Text>
                      </View>
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

  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

});
