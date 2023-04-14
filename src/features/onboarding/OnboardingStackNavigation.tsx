import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PublicOne from '../../components/publics/PublicOne';
import PublicTwo from '../../components/publics/PublicTwo';

const StackNavigator = createStackNavigator();

const OnboardingStackNavigation = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Public One" component={PublicOne} />
      <StackNavigator.Screen name="Public Two" component={PublicTwo} />
    </StackNavigator.Navigator>
  );
};

export default OnboardingStackNavigation;
