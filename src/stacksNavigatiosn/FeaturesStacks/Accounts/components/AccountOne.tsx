/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const AccountOne = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account ONE!</Text>
      <Button
        onPress={() => navigation.navigate('AccountTwo')}
        title="Go to TWO"
      />
    </View>
  );
};

export default AccountOne;
