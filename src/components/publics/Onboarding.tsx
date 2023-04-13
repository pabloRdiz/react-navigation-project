/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button} from 'react-native';

const Onboarding = ({navigation}) => {
  return (
    <Button
      onPress={() => navigation.navigate('Onboarding')}
      title="Onboarding"
    />
  );
};

export default Onboarding;
