/**
 * Sample React Native App
 * https://github.com/facebook/react-native  2018-1-24 Li gang Video
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles/Styles';

export default class Video extends Component {
  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <View style={styles.title}>
            <Text>极客Live</Text>
            <View style={styles.titles}><Text style={{ fontSize: 12, color: 'orange' }}>直播预告</Text><Ionicons name="ios-arrow-forward" size={14} style={{ color: 'orange' }} /></View>
          </View>
          <View style={{
            width: Styles.ScreenWidth,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: 'https://i02picsos.sogoucdn.com/9dbe0f151bdb8cc9' }}
              style={{
                width: 90, height: 110, borderRadius: 6,
              }}
            />
            <View style={{
                  flex: 1,
                  marginLeft: 10,
                 }}
            >
              <Text>eBay高效能测试基础架构的前世今...</Text>
              <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>eBay中国研发中心测试基础架构技术主管茹炳晟 与你分享！</Text>
              <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 200,
                    marginTop: 10,
                   }}
              >
                <Text style={{ fontSize: 10 }}>直播时间: 2018-04-10 20:30</Text>
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
