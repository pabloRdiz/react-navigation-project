import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStackNavigation from '../features/onboarding/OnboardingStackNavigation';
import {useAuth} from '../hooks/useAuth';
import Welcome from '../components/publics/Welcome';
import DrawerNavigation from './DrawerNavigation';

const StackNavigator = createStackNavigator();

const MainStackNavigation = () => {
  const {authenticated} = useAuth();

  return (
    <StackNavigator.Navigator headerMode="none">
      {authenticated && (
        <StackNavigator.Screen name="inside" component={DrawerNavigation} />
      )}
      {!authenticated && (
        <>
          <StackNavigator.Screen name="Welcome" component={Welcome} />
          <StackNavigator.Screen
            name="Onboarding"
            component={OnboardingStackNavigation}
          />
        </>
      )}
    </StackNavigator.Navigator>
  );
};

export default MainStackNavigation;
