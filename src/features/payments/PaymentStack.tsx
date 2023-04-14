import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from './components/Payment';
import PaymentOne from './components/PaymentOne';
import PaymentTwo from './components/PaymentTwo';

const StackNavigator = createStackNavigator();

const PaymentStack = () => {
  console.log('🚀 turbo-cl ~ file: PaymentStack.tsx:18 ~ PaymentStack ~ ');
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Payment" component={Payment} />
      <StackNavigator.Screen name="PaymentOne" component={PaymentOne} />
      <StackNavigator.Screen name="PaymentTwo" component={PaymentTwo} />
    </StackNavigator.Navigator>
  );
};

export default PaymentStack;
