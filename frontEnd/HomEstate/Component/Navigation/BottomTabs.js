import * as React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../Constraints/navigationStrings';
import {Home, Buy, Sell} from "../Screens/Index";
import imagePath from '../Constraints/imagePath';


// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { ColorfulTabBar as TabBar } from 'react-navigation-tabbar-collection';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { StyleSheet, Text, View, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign'

// import imagePath from '../Constraints/imagePath';
// import {Home, Buy, Sell} from "../Screens/Index";
// import { createStackNavigator, createAppContainer } from 'react-navigation';
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
          {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
        independent={true}
        >
        <Tab.Screen 
              name='Buy' 
              component={Buy} 
              options={{
                icon: ({focused, color, size}) => <Icon name="shoppingcart" size={size} color={color} />,
                color: '#4c669f',
              }
              }
            />
        <Tab.Screen 
              name='Home' 
              component={Home}
              options={{
                icon: ({focused, color, size}) => <Icon name="home" size={size} color={color} />,
                color: '#4c669f',
              }
              }
            />
        <Tab.Screen 
              name='Sell'
              component={Sell} 
              options={{
                icon: ({focused, color, size}) => <Icon name="select1" size={size} color={color} />,
                color: '#4c669f',
              }
              }
            />
      </Tab.Navigator> */}
    
  
  </>
);
}

// const styles = StyleSheet.create({
//   screen: {
//     width: '100%',
//     height: '100%',
//     flex: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });