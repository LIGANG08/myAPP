/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-4-11 Li gang Product
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: '赵成的运维体系管理',
    uri: 'https://wx3.sinaimg.cn/crop.0.0.1242.698.1000/006SQnpEly1fmjtm5idmmj30yi0kcwv5.jpg',
    price: 199,
    describe: '让运维体系管理伴你成长',
    auto: '赵成',
  }, {
    key: 2,
    title: '走向大前端',
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
    price: 199,
    describe: '让运维体系管理伴你成长',
    auto: '赵成',
  }, {
    key: 3,
    title: '技术管理',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    price: 199,
    describe: '让运维体系管理伴你成长',
    auto: '朱赟',
  },
  {
    key: 4,
    title: '从前端小工到 BAT 中高级工程师的必备技能',
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    price: 199,
    describe: '让运维体系管理伴你成长',
    auto: '杨文坚',
  },
  {
    key: 5,
    title: 'TensorFlow实战——基础班',
    uri: 'https://static001.geekbang.org/static/www/img/course_tensorflow.dd05c11.jpg',
    price: 199,
    describe: '让运维体系管理伴你成长',
    auto: '郑泽宇',
  },
];

export default class Product extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>精品专栏</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'gray' }}>查看全部</Text><Ionicons name="ios-arrow-forward" size={14} style={{ color: 'gray' }} /></View>
          </View>
          <ScrollView horizontal>
            <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10 }}>
              {
                data.map(item => (
                  <View
                    key={item.key}
                    style={{
                    marginLeft: 10,
                    marginTop: 10,
                    borderRadius: 6,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Image source={{ uri: item.uri }} style={{ width: '100%', height: 110, borderRadius: 6 }} />
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                      <View style={{
                        flex: 1,
                        alignItems: 'center',
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'silver',
                        width: 200,
                        paddingBottom: 20,
                        }}
                      >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.text}>{item.title}</Text>
                          <Text style={{ marginTop: 10, color: 'tomato' }}>$ {item.price} / 年</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item.describe}</Text>
                      </View>
                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                          source={{ uri: item.uri }}
                          style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          marginTop: 10,
                          }}
                        />
                        <Text style={styles.text}>{item.auto}<Text style={{ color: 'gray' }}> | Etsy数据科学主管</Text></Text>
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
    margin: 10,
  },

});
