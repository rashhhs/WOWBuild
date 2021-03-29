import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import {
  SCREEN_BUILD_DETAIL,
  SCREEN_BUILD_FRAGMENT,
  STACK_APP,
  STACK_BUILDS,
  STACK_ME,
} from './ScreenNames'

import BuildDetail from 'src/app/build/BuildDetail'
import BuildFragment from 'src/app/build/BuildFragment'
import { tabBarItem } from 'src/app/core/navigation/utils'
import Color from 'src/utils/Colors'
import { C, apply } from 'src/utils/styles'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const options = {
  gestureEnabled: false,
}

const Me = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREEN_BUILD_DETAIL} component={BuildDetail} />
  </Stack.Navigator>
)

const Builds = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={SCREEN_BUILD_DETAIL} component={BuildDetail} />
    <Stack.Screen name={SCREEN_BUILD_FRAGMENT} component={BuildFragment} />
  </Stack.Navigator>
)

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
      screenOptions={{ unmountOnBlur: true }}>
      <Tab.Screen name={STACK_BUILDS} {...tabBarItem(null, STACK_BUILDS)} component={Builds} />
      <Tab.Screen name={STACK_ME} {...tabBarItem(null, STACK_ME)} component={Me} />
    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={STACK_APP} component={AppStack} options={options} />
    </Stack.Navigator>
  )
}

export default AppNavigator
