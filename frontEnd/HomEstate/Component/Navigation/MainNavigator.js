import { View, Text } from 'react-native'
import React from 'react';
import navigationStrings from '../Constraints/navigationStrings';
import BottomTabs from './BottomTabs';
import Login from "../Login";
import Tiles from "../Screens/Buy/Tiles";

export default function MainNavigator(Drawer) {
  return (
      <>
          <Drawer.Screen
            name={"hello"}
            component={BottomTabs}            
            />
          <Drawer.Screen
            name={navigationStrings.CONTACT}
            component={Tiles}            
            />
            <Drawer.Screen
            name={navigationStrings.LOGOUT}
            component={Login}            
            />
            
      </>
    
  )
}