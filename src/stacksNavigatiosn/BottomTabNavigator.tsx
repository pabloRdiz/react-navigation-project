import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TabBar from '../components/TabBar';
import Home from '../components/Home';
import Payment from '../components/Payment';
import AccountStack from './FeaturesStacks/Accounts/AccountStack';

const TabNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabNavigator.Navigator
    // Si quiero que se reseten todos los stacks
    // screenOptions={{...tabScreenOptions, unmountOnBlur: true }}
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="Payment" component={Payment} />
      <TabNavigator.Screen
        name="Account"
        component={AccountStack}
        // Si quiero que se resete solo este stack ->  unmountOnBlur: true
        options={{headerShown: false, unmountOnBlur: true}}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
