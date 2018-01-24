/**
 * Sample React Native App
 * https://github.com/facebook/react-native 2018-1-24 Li gang Column
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Styles from '../res/Styles';

const data = [
  {
    key: 1,
    title: '赵成的运维体系管理',
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
  {
    key: 6,
    title: 'AI技术内参',
    uri: 'https://static001.geekbang.org/resource/image/ac/9e/ac8ee8c95891e59388eb3b7c76431a9e.jpg',
    auto: '洪亮劼',
  },
];

export default class Main extends Component {
  static navigationOptions = {
    tabBarLabel: '专栏',
    title: '专栏',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-book' : 'ios-book-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  render() {
    const pic = {
      uri: 'https://static001.geekbang.org/resource/image/23/3f/23dadce371938f053d4c4494a300a33f.jpg',
    };
    return (
      <View style={styles.cont}>
        <View style={{ marginTop: 10 }}>
          <Image source={pic} style={{ width: 360, height: 150 }} />
        </View>
        <ScrollView>
          <View>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    paddingTop: 22,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 200,
  },

});
