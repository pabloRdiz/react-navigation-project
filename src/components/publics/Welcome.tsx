/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Login from '../Login';
import Onboarding from './Onboarding';
import {View} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Login />
      <Onboarding navigation={navigation} />
    </View>
  );
};

export default Welcome;
