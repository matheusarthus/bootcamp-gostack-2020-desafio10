import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';

import Profile from '~/pages/Profile';

import Dashboard from '~/pages/Main/Dashboard';
import DetailsOrder from '~/pages/Main/DetailsOrder';
import ConfirmOrder from '~/pages/Main/ConfirmOrder';
import SubmitProblem from '~/pages/Main/SubmitProplem';
import ViewProblems from '~/pages/Main/ViewProblems';

import HeaderDashboard from '~/pages/Main/Dashboard/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation }) => {
          return <HeaderDashboard navigation={navigation} />;
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        /* options={({ navigation }) => ({
          header: () => <HeaderDashboard navigation={navigation} />,
        })} */
      />
      <Stack.Screen name="DetailsOrder" component={DetailsOrder} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="SubmitProblem" component={SubmitProblem} />
      <Stack.Screen name="ViewProblems" component={ViewProblems} />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
          paddingTop: 10,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
