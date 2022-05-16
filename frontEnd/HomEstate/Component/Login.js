import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image,Button,Alert} from 'react-native';
import {TextInput,Checkbox} from 'react-native-paper';
import imagePath from './Constraints/imagePath';
import {useDispatch, useSelector} from "react-redux";
import {login_check} from '../Slices/userSlice';
import validator from "../utils/validation";
import {showError} from "../utils/dispError";



const Login=({navigation})=> {
  
  // const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState(false);
 
  
  const [secCheckPass,setSecCheckPass]=useState(true);
  const [passicon,setPassicon]=useState('eye');

  //redux
  const dispatch=useDispatch();
  const {isAuth,message}=useSelector((state)=> state.userinformation);
  
  //TextInput
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

   
  
 
  const ValidData=()=>{
    const error=validator(
      {
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
    if(checkvalidation){
      if(checked){
        handlePress();
      }else{
        showError("Please accept the terms and condition")
      }
      
    }
  }
  const handlePress=async()=>{
       dispatch(login_check({email,password})); 
       
  }
  
  useEffect(()=>{
    if(isAuth===true){
      Alert.alert(
        "Congratulation",
        "Login Successfull",
        [
         
            { text: "OK", onPress: () => {navigation.navigate('BottomTabs');} }
          
        ]) 
    }
    else if(message==="User not found"){
      alert("User Not Found.");
      
    }
    else if(message==="Incorrect Password"){
      alert("Incorrect Password.");
    }
  
  },[dispatch,isAuth,message])
  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Image source={imagePath.logo} style={styles.logo}/>
        <Text style={styles.headingStyle}>LOGIN</Text>
        <Text style={styles.text}>Sign in to continue...</Text>
       

   
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
            placeholder='Enter your Password'
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
        <Text style={{color: 'black', fontSize: 14}} >Don't have an account ? </Text>
        <Text style={{color: 'blue', fontSize: 14,textDecorationLine: 'underline',}} onPress={()=>{navigation.navigate("Signup")}}> Signup </Text>
        </View>
         <Button title='Login' onPress={ValidAndSubmit}/>
        
        
     
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:'#F3E9DD',  
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  scrollViewStyle: {
    margin:10,  
    padding: 10,
    justifyContent: 'center',
  },
  
  logo:{
    alignSelf:'center',
  },
  headingStyle: {
    color:'darkgreen',
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
    color: '#112B3C',
    backgroundColor: 'transparent',
  },

  button2: {
   marginTop:10,
  },
  
 
});

export default Login;