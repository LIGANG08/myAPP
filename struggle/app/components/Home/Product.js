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
    identity: '美丽联合集团技术服务经理',
  }, {
    key: 2,
    title: '深入浅出区块链',
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
    price: 199,
    describe: '你的区块链入门第一课',
    auto: '陈浩',
    identity: '元界CTO',
  }, {
    key: 3,
    title: 'AI技术内参',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    price: 199,
    describe: '你的360度人工智能信息助理',
    auto: '洪亮劼',
    identity: 'Etsy数据科学主管',
  },
  {
    key: 4,
    title: '技术与商业案例解读',
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    price: 199,
    describe: '一堂课看懂技术创新与商业模式',
    auto: '徐飞',
    identity: '计算机博士,资深架构师',
  },
  {
    key: 5,
    title: '推荐系统三十六式',
    uri: 'https://static001.geekbang.org/static/www/img/course_tensorflow.dd05c11.jpg',
    price: 199,
    describe: '解决系统起步阶段80%的问题',
    auto: '刑无刀',
    identity: '链家网资深算法专家',
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
                    display: 'flex',
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
                          <Text numberOfLines={1} style={styles.text}>{item.title}</Text>
                          <Text style={{ marginTop: 10, color: 'tomato' }}>$ {item.price} / 年</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item.describe}</Text>
                      </View>
                      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          source={{ uri: item.uri }}
                          style={{
                          width: 20,
                          height: 20,
                          borderRadius: 10,
                          }}
                        />
                        <Text style={{ margin: 10 }}>{item.auto}<Text style={{ color: 'gray' }}> | {item.identity}</Text></Text>
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
    width: 120,
  },

});
