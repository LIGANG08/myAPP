import React from 'react';
import { View, Text, Button } from 'react-native';
// import { Button } from 'react-native-elements'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
    <Button
  title='BUTTON' />

    <Button
      raised
      icon={{name: 'cached'}}
      title='BUTTON WITH ICON' />

    <Button
      large
      iconRight={{name: 'code'}}
      title='LARGE WITH RIGHT ICON' />

    <Button
      large
      icon={{name: 'envira', type: 'font-awesome'}}
      title='LARGE WITH ICON TYPE' />

    <Button
      large
      // icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
      title='OCTICON' />
      </View>
    );

export default HomeScreen;