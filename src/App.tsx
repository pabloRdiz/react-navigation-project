/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './context/Auth';
import MainStackNavigation from './stacksNavigatiosn/MainStackNavigation';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
