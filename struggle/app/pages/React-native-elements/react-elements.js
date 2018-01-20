/**
 *  2018-1-20 Li Gang react-native-elements
 */

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
    <Button title="BUTTON" />

    <Button
      raised
      icon={{ name: 'cached' }}
      title="BUTTON WITH ICON"
    />

    <Button
      large
      iconRight={{ name: 'code' }}
      title="LARGE WITH RIGHT ICON"
    />

    <Button
      large
      icon={{ name: 'envira', type: 'font-awesome' }}
      title="LARGE WITH ICON TYPE"
    />

    <Button
      large
      // icon={{ name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
      title="OCTICON"
    />
    <Text h1>Heading 1</Text>
    <Text h2>Heading 2</Text>
    <Text h3>Heading 3</Text>
    <Text h4>Heading 4</Text>
  </View>
);

export default HomeScreen;
