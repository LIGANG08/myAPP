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
    describe: '带你直击运维的本质',
    price: 58,
    time: 36,
    number: 1608,
    uri: 'https://wx3.sinaimg.cn/crop.0.0.1242.698.1000/006SQnpEly1fmjtm5idmmj30yi0kcwv5.jpg',
    auto: '赵成',
    identity: '美丽联合集团技术服务经理',
    update: '更新完毕',
  }, {
    key: 2,
    title: '人工智能基础课',
    describe: '通俗易懂的人工智能入门课',
    price: 58,
    time: 36,
    number: 6994,
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
    auto: '王天一',
    identity: '工学博士，副教授',
    update: '每周一至周五更新',
  }, {
    key: 3,
    title: '朱赞的技术管理',
    describe: '从技术到管理，让你的目标函数达到最优解',
    price: 58,
    time: 36,
    number: 1600,
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    auto: '朱赟',
    identity: '计算机博士,Airbnb技术经理',
    update: '每周一 / 三 / 五更新',
  },
  {
    key: 4,
    title: '从前端小工到 BAT 中高级工程师的必备技能',
    describe: '带你直击运维的本质',
    price: 58,
    time: 36,
    number: 1007,
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    auto: '杨文坚',
    identity: '美丽联合集团技术服务经理',
    update: '更新完毕',
  },
  {
    key: 5,
    title: '邱岳的产品手记',
    describe: '重构你的产品思维',
    price: 58,
    time: 45,
    number: 3677,
    uri: 'https://static001.geekbang.org/static/www/img/course_tensorflow.dd05c11.jpg',
    auto: '邱岳',
    identity: '无码科技产品经理，公众号二爷',
    update: '每周二 / 四更新',
  },
  {
    key: 6,
    title: 'AI技术内参',
    describe: '你的360度人工智能信息助理',
    price: 58,
    time: 40,
    number: 4323,
    uri: 'https://static001.geekbang.org/resource/image/ac/9e/ac8ee8c95891e59388eb3b7c76431a9e.jpg',
    auto: '洪亮劼',
    identity: 'Etsy数据科学主管，前雅虎研...',
    update: '更新完毕',
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
      <ScrollView>
        <View style={styles.cont}>
          <View style={{ marginTop: 10 }}>
            <Image source={pic} style={{ width: 360, height: 150 }} />
          </View>
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
                      flexDirection: 'row',
                      padding: 10,
                      marginTop: 10,
                      borderRadius: 6,
                      borderColor: '#E8E8E8',
                      borderWidth: 1,
                      backgroundColor: 'white',
                      }}
                    >
                      <View style={{ flex: 2, padding: 10 }}>
                        <View style={{
                          borderBottomWidth: 1,
                          borderBottomColor: 'gray',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingBottom: 10,
                          }}
                        >
                          <View style={{
                            width: 36,
                            height: 36,
                            borderRadius: 18,
                            borderWidth: 1,
                            borderColor: 'tomato',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}
                          >
                            <Image source={{ uri: item.uri }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                          </View>
                          <View style={{ marginLeft: 10 }}>
                            <Text style={{}}>{item.auto}</Text>
                            <Text numberOfLines={1} style={{ color: 'gray', marginTop: 3, width: 120 }}>{item.identity}</Text>
                          </View>
                        </View>
                        <View style={{
                          marginTop: 10,
                          display: 'flex',
                          justifyContent: 'center',
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>{item.title}</Text>
                          <Text style={{ marginTop: 5, fontSize: 12, color: 'gray' }}>{item.describe}</Text>
                        </View>
                        <View style={{
                          marginTop: 20,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          }}
                        >
                          <Text style={{ fontSize: 15, color: 'tomato' }}>$ {item.price} / {item.time}期</Text>
                          <Text style={{ fontSize: 12, color: 'gray' }}>{item.number}人购买</Text>
                        </View>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          }}
                        >
                          <Image source={{ uri: item.uri }} style={{ width: 100, height: 100, borderRadius: 6 }} />
                          <Text style={{ marginTop: 20, fontSize: 12, color: 'gray' }}>{item.update}</Text>
                        </View>
                      </View>
                    </View>
                  ))
                }
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  cont: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
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
