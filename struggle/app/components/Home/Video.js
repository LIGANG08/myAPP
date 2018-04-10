/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Video
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Styles from './Styles/Styles';

const data = [
  {
    key: 1,
    title: '9小时搞定微信小程序开发',
    uri: 'https://wx2.sinaimg.cn/mw690/006SQnpEly1flwdx494pyj30yi0lytal.jpg',
    describe: '从0开始构建你的第一款微信小程序|高磊',
    time: '80课时.约600分钟',
    price: '199',
  }, {
    key: 2,
    title: '深度学习应用实践60讲',
    uri: 'https://wx1.sinaimg.cn/mw690/006SQnpEly1flg7zjcqmaj30yi0kcqay.jpg',
    describe: '从模型到实践,带你进阶深度学习AICon人工智能专家团',
    time: '60课时.约520分钟',
    price: '299',
  },
  {
    key: 3,
    title: '微服务架构核心20讲',
    uri: 'https://static001.geekbang.org/static/www/img/course_qianduan.96ed848.jpg',
    describe: '从理论到实践,理解微服务关键问题,杨波|拍拍贷基础框架研发部总监,资深架构师,微服务技术专家',
    time: '20课时.约8分钟/课时',
    price: '330',
  },
];

export default class Video extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>视频课程</Text>
          </View>
          <View style={{
            width: Styles.ScreenWidth,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: 'https://wx2.sinaimg.cn/thumb300/006SQnpEly1fnkuk362x5j30yi1pdtuf.jpg' }}
              style={{
                width: 90, height: 110, borderRadius: 6,
              }}
            />
            <View style={{
                  flex: 1,
                  marginLeft: 10,
                 }}
            >
              <Text>微服务架构核心20讲</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>从理论到实战,理解微服务关键问题</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>杨波|拍拍贷基础框架研发部总监,资深架构师,微服务技术专家</Text>
              <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 200,
                    marginTop: 30,
                   }}
              >
                <Text>20课时-约8分钟/课时</Text>
                <Text style={{ color: 'tomato' }}>¥ 39</Text>
              </View>
            </View>
          </View>
          <View style={{
            width: Styles.ScreenWidth,
            padding: 10,
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
                        <Text>{item.title}</Text>
                      </View>
                      <View style={{ height: 30 }}>
                        <Text numberOfLines={2} style={styles.text}>{item.describe}</Text>
                      </View>
                      <View style={{
                        height: 30, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                        }}
                      >
                        <Text style={styles.text}>{item.time}</Text>
                        <Text style={{ color: 'tomato', fontSize: 15 }}>$ {item.price}</Text>
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
  text: {
    fontSize: 12,
    color: 'gray',
    width: 180,
  },
});
