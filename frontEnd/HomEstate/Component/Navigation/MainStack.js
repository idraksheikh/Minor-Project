import { View, Text } from 'react-native'
import React from 'react';
import navigationStrings from '../Constraints/navigationStrings';
import BottomTabs from './BottomTabs';
import Header from '../Screens/Header';



export default function MainStack(Stack) {
  return (
      <>
          
          <Stack.Screen name="BottomTabs" component={BottomTabs}/>
          
      </>
    
  )
}