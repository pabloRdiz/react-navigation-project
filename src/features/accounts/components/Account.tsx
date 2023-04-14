/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const Account = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account!</Text>
      <Button
        onPress={() => navigation.navigate('AccountOne')}
        title="Go to ONE"
      />
    </View>
  );
};

export default Account;
