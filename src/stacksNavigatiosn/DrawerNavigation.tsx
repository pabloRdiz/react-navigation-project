import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Profile from '../components/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{unmountOnBlur: true}}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
