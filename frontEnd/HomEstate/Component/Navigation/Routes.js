import { View, Text } from 'react-native'

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../Constraints/navigationStrings';

import MainNavigator from './MainNavigator';

const Drawer=createDrawerNavigator();
export default function Routes() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        {MainNavigator(Drawer)}
      </Drawer.Navigator>
    </NavigationContainer>

    </>
  )
}