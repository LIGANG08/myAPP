/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Video
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Styles from './Styles/Styles';

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
              <Text style={{ fontSize: 15, color: 'gray', marginTop: 10 }}>从理论到实战，理解微服务关键问题</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>杨波|拍拍贷基础框架研发部总监，资深架构师，微服务技术专家</Text>
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
    // backgroundColor: 'silver',
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
