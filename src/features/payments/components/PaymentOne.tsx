/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const PaymentOne = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Payment ONE!</Text>
      <Button
        onPress={() => navigation.navigate('PaymentTwo')}
        title="Go to ONE"
      />
    </View>
  );
};

export default PaymentOne;
