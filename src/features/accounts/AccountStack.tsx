import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from './components/Account';
import AccountOne from './components/AccountOne';
import AccountTwo from './components/AccountTwo';

const StackNavigator = createStackNavigator();

const AccountStack = () => {
  console.log('🚀 turbo-cl ~ file: AccountStack.tsx:18 ~ AccountStack ~ ');

  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Account" component={Account} />
      <StackNavigator.Screen name="AccountOne" component={AccountOne} />
      <StackNavigator.Screen name="AccountTwo" component={AccountTwo} />
    </StackNavigator.Navigator>
  );
};

export default AccountStack;
