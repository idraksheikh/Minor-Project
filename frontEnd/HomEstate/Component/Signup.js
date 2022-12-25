import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text, Image,Button,Alert} from 'react-native';

import {Checkbox, TextInput} from 'react-native-paper';
import validator from "../utils/validation";
import {showError} from "../utils/dispError";

import {useDispatch, useSelector} from "react-redux";
import {signup_check,logout} from '../Slices/userSlice';
import imagePath from './Constraints/imagePath';
const Signup=({navigation})=> {
  
    const [checked, setChecked] = useState(false);
    // const [formData,setformData]=useState(null);

    const [show, setShow] = useState(false);


    const dispatch=useDispatch();
    const {isAuth,message,status}=useSelector((state)=> state.userinformation);
    
    const [secCheckPass,setSecCheckPass]=useState(true);
    const [secCheckConPass,setSecCheckConPass]=useState(true);
    const [passicon,setPassicon]=useState('eye');
    const [conpassicon,setConpassicon]=useState('eye');

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    
    const ValidData=()=>{
      const error=validator(
        {
          name,
          email,
          password,
        })
        if(error){
          showError(error);
          return false;
        }
        else{
          return true;
        }
    }
   
    const ValidAndSubmit=()=>{
      const checkvalidation=ValidData();
      if(confirmPassword!==password){
        showError("Paasword and Confirm password does not match.");
      }else{
        if(checkvalidation){
          if(checked){
            handlePress();
          }else{
            showError("Please accept the terms and condition")
          }
          
        }
    }
      
      
      
      
    }
    const handlePress=()=>{
      dispatch(signup_check({name,email,password}));
     
    }
    useEffect(()=>{
      if(isAuth===true){
      
        Alert.alert(
          "Congratulation",
          "Signup successfull.",
          [
           
              { text: "OK", onPress: () => {navigation.navigate('BottomTabs');} }
            
          ]) 
      }
      else if(message==="User already exists"){
       alert("User already exists.");
      }
      },[dispatch,isAuth,message]);
    
    return (
      <View style={styles.containerStyle}>
       <ScrollView contentContainerStyle={styles.scrollViewStyle}>
       <Image source={imagePath.logo} style={styles.logo}/>
       
        <Text style={styles.headingStyle}>SIGNUP</Text>
        <Text style={styles.text}>Find your dream home with HomEstate...</Text>
      

        <TextInput
            mode="outlined"
            label="Username"
            placeholder='Enter your Username' 
            value={name} 
            onChangeText={(name)=>{setName(name)}} 
            left={<TextInput.Icon name="account"/>}
            
           
          />
        <TextInput
            mode="outlined"
            label="Email"
            placeholder='Enter your Email' 
            value={email} 
            onChangeText={(email)=>{setEmail(email)}} 
            left={<TextInput.Icon name="email"/>}
            
           
          />
          <TextInput 
            mode="outlined"
            label="Password"
            secureTextEntry={secCheckPass} 
            placeholder='Pasword' 
            value={password}
            onChangeText={(password)=>{setPassword(password)}}
            left={<TextInput.Icon name="lock"/>}
            right={<TextInput.Icon name={passicon} 
            onPress={()=>{
              setSecCheckPass(!(secCheckPass));
              if(passicon==='eye'){
                setPassicon('eye-off');
              }else{
                setPassicon('eye');
              }
              }}/>}
          />
           <TextInput 
            mode="outlined"
            label="Confirm Password"
            secureTextEntry={secCheckConPass} 
            placeholder='Pasword' 
            value={confirmPassword}
            onChangeText={(confirmPassword)=>{setConfirmPassword(confirmPassword)}}
            left={<TextInput.Icon name="lock"/>}
            right={<TextInput.Icon name={conpassicon} onPress={()=>{
              setSecCheckConPass(!(secCheckConPass));
              if(conpassicon==='eye'){
                setConpassicon('eye-off');
              }else{
                setConpassicon('eye');
              }
              }}/>}
          />
         
         <View style={{flexDirection: 'row'}}>       
          <Checkbox
          status={checked ? 'checked' : 'unchecked'}
         
          onPress={() => {
          setChecked(!checked);
           }}
         /><Text 
         style={{color: 'blue', fontSize: 14,marginTop:6,}}
         onPress={()=>{
          {Alert.alert(
          "Terms and Conditions",
          "The email you entered may be visible to the other user.",
          [
           
              { text: "OK",}
            
          ]) }
         }}
         >
         Accept the Terms and Conditions: {checked ? "👍" : "👎"}
         </Text>
        </View>
        
        <View style={{flexDirection: 'row',padding:10,}}>     
        <Text style={{color: '#ffffff', fontSize: 14}} >Already registered ?</Text>
        <Text style={{color: 'blue', fontSize: 14,textDecorationLine: 'underline',}} onPress={()=>{navigation.navigate("Login")}}> Login </Text>
        </View>

       
         <Button 
          title='Register'         
          onPress={ValidAndSubmit}
         />

       
        
     
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:'#4c669f',  
      
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  scrollViewStyle: {
    margin:10,
    marginTop:100,
    padding: 10,
    justifyContent: 'center',
  },
  
  logo:{
    alignSelf:'center',
  },
  headingStyle: {
    color:'#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:20,
    textShadowRadius: 9,
    textShadowColor: '#FFFBF4',
  },
 
  text: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'auto',
    margin: 3,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});

export default Signup;