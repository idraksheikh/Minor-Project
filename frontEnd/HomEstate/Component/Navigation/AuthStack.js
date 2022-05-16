import { View, Text } from 'react-native'
import React from 'react';
import Login from '../Login';
import Signup from '../Signup';




export default function AuthStack(Stack) {
    return (
        <>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
           
        </>
      
    )
  }