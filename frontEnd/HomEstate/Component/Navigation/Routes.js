import { View, Text } from 'react-native'

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../Constraints/navigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <>
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
      {AuthStack(Stack)}
       {MainStack(Stack)}
      
      </Stack.Navigator>
    </NavigationContainer>

    </>
  )
}