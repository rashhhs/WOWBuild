import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SCREEN_BUILD_DETAIL,
  STACK_APP,
  STACK_BUILDS,
  STACK_ME,
} from './ScreenNames';
import BuildDetail from '../../build/BuildDetail';
import {tabBarItem} from './utils';
import {C, apply} from '../../../utils/styles';
import Color from '../../../utils/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  gestureEnabled: false,
};

const Me = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREEN_BUILD_DETAIL} component={BuildDetail} />
  </Stack.Navigator>
);

const Builds = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREEN_BUILD_DETAIL} component={BuildDetail} />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.action,
        inactiveTintColor: Color.support,
        style: apply(C.bgPlatin),
        keyboardHidesTabBar: true,
        tabStyle: apply(C.bgPlatin, C.itemsCenter, C.py1, C.h12),
      }}
      screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen
        name={STACK_BUILDS}
        {...tabBarItem(null, STACK_BUILDS)}
        component={Builds}
      />
      <Tab.Screen
        name={STACK_ME}
        {...tabBarItem(null, STACK_ME)}
        component={Me}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={STACK_APP} component={AppStack} options={options} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
