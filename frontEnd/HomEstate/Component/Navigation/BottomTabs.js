import * as React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../Constraints/navigationStrings';
import {Home, Buy, Sell} from "../Screens/Index";
import imagePath from '../Constraints/imagePath';


const Tab = createBottomTabNavigator();
export default function BottomTabs(){
    return (<>
        
          <Tab.Navigator initialRouteName='Home'
          screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor:'gray',
            tabBarActiveTintColor:'green',
            tabBarShowLabel:false,
          }}>
           
            <Tab.Screen 
              name={navigationStrings.BUY} 
              component={Buy} 
              options={{
                tabBarIcon:({focused})=>{
                    return(
                      <Image 
                      style={{tintColor: focused?'green':'gray'}}
                      source={focused? imagePath.icBuy2x:imagePath.icBuy}/>                    )
                }
              }
              }
            />
             <Tab.Screen 
              name={navigationStrings.HOME} 
              component={Home}
              options={{
                tabBarIcon:({focused})=>{
                    return(
                      <Image 
                      style={{tintColor: focused?'green':'gray'}}
                      source={focused? imagePath.icHome2x:imagePath.icHome}/>                    
                      )
                }
              }
              }
            />
            <Tab.Screen 
              name={navigationStrings.SELL} 
              component={Sell} 
              options={{
                tabBarIcon:({focused})=>{
                    return(
                      <Image 
                      style={{tintColor: focused?'green':'gray'}}
                      source={focused? imagePath.icSell2x:imagePath.icSell}/>                    )
                }
              }
              }
            />
          </Tab.Navigator>
        
    
  
  </>
);
}