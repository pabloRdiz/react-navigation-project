/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';

const Payment = ({navigation}) => {
  console.log('🚀 turbo-cl ~ file: Payment.tsx:6 ~ Payment ~ ');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Payment!</Text>
      <Button
        onPress={() => navigation.navigate('PaymentOne')}
        title="Go to ONE"
      />
    </View>
  );
};

export default Payment;
