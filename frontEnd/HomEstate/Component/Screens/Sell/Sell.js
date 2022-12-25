import React from 'react';
import {  View, Image, Text,StyleSheet ,Alert} from 'react-native';
import navigationStrings from '../../Constraints/navigationStrings';
import Header from '../Headers';
import {useDispatch} from "react-redux";
import { logout } from '../../../Slices/userSlice';
import Form from './Form';
import Seller from './Seller';
import { Button } from 'react-native-paper';

  export default function Sell({ navigation }) {
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
      <Seller />
      </>
    );
  }
 const  styles=StyleSheet.create({
    Logoutbutton:{
      
      backgroundColor:'#ffffff',
      borderColor:"#764AF1",
    }
  })

  