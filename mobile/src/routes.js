import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
