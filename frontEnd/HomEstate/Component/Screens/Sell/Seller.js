import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image,Button,Alert} from 'react-native';

import validator from "../../../utils/validation";
import {showError} from "../../../utils/dispError";
import {Checkbox, TextInput} from 'react-native-paper';
import ImagePicker,{launchImageLibrary} from "react-native-image-picker";
import {useDispatch, useSelector} from "react-redux";
import { selling_property } from '../../../Slices/sellingSlice';


function Seller() {
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState(false);


  const dispatch=useDispatch();
  const {message,status}=useSelector((state)=> state.sellingproperty);


  
  
  const [ownername, setOwnername] = useState('');
  const [contactnumber, setContactnumber] = useState(0);
  const [email,setEmail]=useState('');
  const [location,setLocation]=useState('');
  const [price,setPrice]=useState(0);
  const [area,setArea]=useState(0);
  const [city,setCity]=useState('');
  const [state,setState]=useState('');
  const [description,setDescription]=useState('');

  const [propertyImage,setPropertyImage]=useState(null);
  

  
 

        const ValidData=()=>{
          setArea(parseInt(area));
          setPrice(parseInt(price));
          setContactnumber(parseInt(contactnumber));
          const error=validator(
            {
              
              ownername,
              contactnumber,
              email,
              location,
              price,
              area,
              city,
              state,
              description,
              
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

          if(propertyImage){
                 
            const checkvalidation=ValidData();
            if(checkvalidation){
              if(checked){
                handlePress();
              }else{
                showError("Please accept the terms and condition")
              }
              
            }
          }
          else{
            alert("Upload Image");
          }
          
        }
        const handlePress=()=>{
          dispatch(selling_property({
              ownername,
              contactnumber,
              email,
              location,
              price,
              area,
              city,
              state,
              description,
              propertyImage
          }));
          }
        useEffect(()=>{
          if(message==="Property information got stored."){
            alert(message);
          }
          else if(status==="error"){
            
              alert(message);
            
          }
         
          console.log(message,status);
        },[dispatch,message]);






        const handlePhoto=(img)=>{
          const imgInfo=new FormData();
          imgInfo.append('file',img);
          imgInfo.append('upload_preset','homestate');
          imgInfo.append('cloud_name','idrak');
          
          console.log(imgInfo);
          fetch('https://api.cloudinary.com/v1_1/idrak/image/upload',{
            method:"POST",
            body:imgInfo,
            headers:{
              'Accept':'application/json',
              'content-type':'multipart/form-data'
            }
          }).then(res=>res.json())
          .then(imdata=>{
              console.log(imdata);
              const {url,public_id}=imdata;
              setPropertyImage({url,public_id});
          }).catch((e)=>{
            console.log(e.message);
          })
        }
      
      const handleChoosePhoto=async()=>{
        
        const options = {
              title:'select image',
              storageOptions:{
                  skipBackup:true,
              }
        };
        launchImageLibrary(options, (response) => {
       
          console.log('Response = ',response);
          
            if(response.didCancel){
              console.log("User cancelled the upload.");
              }
            else if(response.error){
              console.log("Image picker error "+response.error);
            }
            else{
             
              const uri=response.assets[0].uri;
              const type=response.assets[0].type;
              const name=response.assets[0].fileName;
              const source={uri,type,name};
              handlePhoto(source);

            }
        });


      }
      
        
  return (

    <View style={styles.containerStyle}>
      
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
      
        <Text style={styles.headingStyle}>SELL ESTATE</Text>
        <Text style={styles.text}>Pls provide the details to continue...</Text>
        <View style={{flex:1, }}> 
          
           {propertyImage &&(
           
             <Image source={{uri: propertyImage.url}}
               style={{ width:250,height:250,alignSelf:'center',}}
             />
           )}
           <Button title='Choose Photo'  style={{}} onPress={handleChoosePhoto}/> 
         </View> 
       
        <TextInput
            mode="outlined"
            label="Ownername"
            placeholder="Enter Owner's name"
            value={ownername} 
            onChangeText={(ownername)=>{setOwnername(ownername)}} 
            left={<TextInput.Icon name="account"/>}
          />

        <TextInput
            mode="outlined"
            label="Contact Number"
            placeholder="Enter Your contact number"
            value={contactnumber} 
             onChangeText={(contactnumber)=>{setContactnumber(contactnumber)}} 
           
            left={<TextInput.Icon name="phone"/>}
            keyboardType="number-pad"
            maxLength={10}
            
          />
        <TextInput
            mode="outlined"
            label="Email"
            placeholder="Enter Your email"
            value={email} 
            onChangeText={(email)=>{setEmail(email)}} 
            left={<TextInput.Icon name="email"/>}
            
          />
        <TextInput
            mode="outlined"
            label="Address"
            placeholder="Enter address of property"
            value={location} 
            onChangeText={(location)=>{setLocation(location)}} 
            left={<TextInput.Icon name="map-marker"/>}
            
          />
        <TextInput
            mode="outlined"
            label="Price"
            placeholder="Enter price of property"
            value={price} 
            onChangeText={(price)=>{setPrice(price)}} 
            left={<TextInput.Icon name="currency-inr"/>}
            right={<TextInput.Affix text="Lakhs" />}
            keyboardType="number-pad"
            
            
          />
        <TextInput
            mode="outlined"
            label="Area"
            placeholder="Enter Area of property"
            value={area} 
            onChangeText={(area)=>{setArea(area)}} 
            left={<TextInput.Icon name="ruler-square-compass"/>}
            right={<TextInput.Affix text="Sq. Ft." />}
            keyboardType="number-pad"
                        
          />
        <TextInput
            mode="outlined"
            label="City"
            placeholder="Enter the city"
            value={city} 
            onChangeText={(city)=>{setCity(city)}} 
            onBlur={()=>{ 
            if(city.charAt(0)!==city.charAt(0).toUpperCase()){
              setCity(city.charAt(0).toUpperCase()+city.slice(1));
             }}}
            left={<TextInput.Icon name="office-building"/>}
          />
        <TextInput
            mode="outlined"
            label="State"
            placeholder="Enter the state"
            value={state} 
            onChangeText={(state)=>{setState(state)}} 
            onBlur={()=>{ 
            if(state.charAt(0)!==state.charAt(0).toUpperCase()){
              setState(state.charAt(0).toUpperCase()+state.slice(1));
             }}}
            left={<TextInput.Icon name="city-variant-outline"/>}
          />
        <TextInput
            mode="outlined"
            label="Description"
            placeholder="Enter the description"
            value={description} 
            onChangeText={(description)=>{setDescription(description)}} 
            left={<TextInput.Icon name="note-multiple-outline"/>}
            multiline= {true}
            style={{height:100,width:320}}
               
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
        
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 24}}>
      
           
            <Button 
          title='Submit'         
          onPress={ValidAndSubmit}
         />
        </View>
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
    borderRadius: 5
  },
  scrollViewStyle: {
    margin:10,
    padding: 10,
    justifyContent: 'center',
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
  button: {
    height: 38,
    width: 85,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    opacity: 0.8,
  },
});

export default Seller;