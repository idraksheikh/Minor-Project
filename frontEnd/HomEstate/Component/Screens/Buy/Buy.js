import * as React from 'react';
import {  View, Image, Text,StyleSheet,Alert } from 'react-native';
import navigationStrings from '../../Constraints/navigationStrings';
import Header from '../Headers';
import Tiles from './Tiles';
import {useDispatch} from "react-redux";
import { logout } from '../../../Slices/userSlice';
import { Button } from 'react-native-paper';
  
 export default function Buy({ navigation }) {
  const dispatch=useDispatch();
  const lgot=()=>{
    Alert.alert(
      "Log Out",
      "Are you sure you want to logout.",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => {
          dispatch(logout());
          navigation.navigate('Login')
          
          ;} }
      ]
    );
   }
    return (<>
      <Header/>
      <Button style={styles.Logoutbutton} title='LogOut' onPress={lgot}>Logout</Button>
      <Tiles/>
      </>
    );
  }
  const  styles=StyleSheet.create({
    Logoutbutton:{
      
      backgroundColor:'#ffffff',
      borderColor:"#764AF1",
    }
  })