// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: '你好!My App\n' +
//     'Cmd+D or shake for dev menu,',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <View style={{ height: '30%', width: '100%', background: 'silver' }}>top</View> */}
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image  } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
      <View style={styles.wrap}>
        <Text style={styles.title}>发现</Text>
        <View style={styles.top}>
          <Text>Hello world!</Text>
          <Image source={pic} style={{width: 193, height: 110}} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
      </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
  position: 'absolute', 
  top: 50,
  borderColor: 'black',
  // backgroundColor: 'silver',
  // borderBottomWidth: 8,
  },
  top: {
    width: '100%',
    height: 150,
    backgroundColor: 'silver',
    marginTop: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
   position: 'absolute',
   bottom: 10,
  }
});
