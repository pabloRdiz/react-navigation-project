/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const PublicOne = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Public One!</Text>
      <Button
        onPress={() => navigation.navigate('Public Two')}
        title="Go to Public Two"
      />
    </View>
  );
};

export default PublicOne;
