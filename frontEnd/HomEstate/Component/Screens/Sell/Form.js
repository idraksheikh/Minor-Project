import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Image, ImageBackground, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import imagePath from '../../Constraints/imagePath';
import {useDispatch, useSelector} from "react-redux";
import { selling_property } from '../../../Slices/sellingSlice';


import Tiles from '../Buy/Tiles.js';

// import { event } from 'react-native-reanimated';
  let sellDetails;
  let flag=0;
const Form = () => {
  const dispatch=useDispatch();
  const {message,status}=useSelector((state)=> state.sellingproperty);
  const [ownername, setOwnername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState();
  const [currency, setCurrency] = useState("US Dollars");
  const  onFormSubmit=()=>{
    dispatch(selling_property({ownername,email,location}));
    console.log(message,status);
  }
        
  return (
    <>
     <ImageBackground source={imagePath.house3} style={styles.container}>
    <View style={styles.container} id='cont'>
     
      <View>
        <Text style={styles.formLabel}> Sell Estate </Text>
        <TextInput
       
          placeholder="Name"        
          style={styles.inputStyle}         
          value={ownername}         
          onChangeText={uname => setOwnername(uname)} 
          
        />
        <TextInput 
          placeholder="E-mail" 
          style={styles.inputStyle}
          value={email}         
          onChangeText={mail => setEmail(mail)} 
          
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          value={password}         
          onChangeText={pass => setPassword(pass)} 
          
         
        />
        <TextInput 
          placeholder="Location" 
          style={styles.inputStyle}
          value={location}         
          onChangeText={loc => setLocation(loc)} 
          
        />

        <Picker  
          style={styles.inputStyle}
          selectedValue={currency}
          onValueChange={c=>setCurrency(c)}
           >
          <Picker.Item label="USD" value="US Dollars"  />
          <Picker.Item label="EUR" value="Euro"  />
          <Picker.Item label="NGN" value="Naira"  />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         
        </Text>
        <Button
          title="Submit"
          color="blue"
          onPress={onFormSubmit}

        />
      </View>
      
    </View>
    {/* <View id='show' > 
    <Text style={styles.shows}>{sellForm.username}</Text>
    <Text style={styles.shows}>{sellForm.email}</Text>
    <Text style={styles.shows}>{sellForm.password}</Text>
    <Text style={styles.shows}>{sellForm.location}</Text>
    <Text style={styles.shows}>{sellForm.currency}</Text>
    </View> */}
    </ImageBackground>

    </>
  );
  
};
const styles = StyleSheet.create({
  shows:{
    color:'#fff',
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  formLabel: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30
    
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
 
});

export default Form ;

export {sellDetails};
