import React, { useEffect, useState,useCallback } from 'react';
import {Image,Linking,Alert,StyleSheet } from 'react-native';
import { ActivityIndicator, FlatList, Text, View, ScrollView,RefreshControl } from 'react-native';
import { Tile } from 'react-native-elements';
import {TextInput,Button,Card, Title, Paragraph} from "react-native-paper";

import {useDispatch, useSelector} from "react-redux";
import { get_property_info,get_property_info_by_city } from '../../../Slices/sellingSlice';
import validator from "../../../utils/validation";
import {showError} from "../../../utils/dispError";
import imagePath from '../../Constraints/imagePath';



export default function Tiles({match}) {

    const dispatch=useDispatch();
    const [property,setProperty]=useState([]);
    const {selling,status,message}=useSelector((state)=> state.sellingproperty);
    const [city,setCity]=useState('');
    const [vtext,setVtext]=useState(true);
    
   
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      console.log("refresh");
      wait(2000).then(() => setRefreshing(false));
    }, []);
    
    
 
  const ValidData=()=>{
    const error=validator(
      {
        city
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
     ref();
    }
  }
       
    
    const ref=()=>{
      dispatch(get_property_info_by_city(city));
      
       
  } 
  useEffect(()=>{
    setProperty(selling); 
        
    if(status==="error"){
      alert(message);
      setProperty([]);
      setVtext('Please Enter City');
    }else{
      setVtext(false);
    }
  },[dispatch,message]);
   
    return(
   <View style={styles.containerStyle}>
    <ScrollView contentContainerStyle={styles.scrollViewStyle}> 
    
     <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> 
     <View style={styles.textbox}>
     <TextInput
       mode='flat'
       placeholder='City'
             
       style={styles.inputStyle}         
       value={city}         
       onChangeText={ccity => setCity(ccity)} 
       onBlur={()=>{ 
          if(city.charAt(0)!==city.charAt(0).toUpperCase()){
            setCity(city.charAt(0).toUpperCase()+city.slice(1));
    }}}
       
     />
      <Button mode="text"  onPress={ValidAndSubmit} > Search</Button>
     </View>
    
     {property && property.map((properties)=>(
       <>
       <Card  style={styles.mainCard} key={properties._id} >
       <Card.Cover source={{ uri: properties.image.url }} style={styles.cardCover} />
        <Card.Content>
        <Title style={styles.cardTitle}>{properties.location}</Title>
        <Text style={styles.cardKey}>Description:</Text>
        <Paragraph style={styles.cardPara}>
        
        {properties.description}
        </Paragraph>

        <Text style={styles.cardKey}> Price:</Text><Text style={styles.cardVal}> ₹ { properties.price} Lakhs </Text>
        <Text style={styles.cardKey}> City :</Text><Text style={styles.cardVal}> { properties.city} </Text>
        <Text style={styles.cardKey}> Area :</Text><Text style={styles.cardVal}> { properties.area} Sq. Ft. </Text>
      </Card.Content>
     
      <Card.Actions style={styles.cardActions} >
      
      <Button  style={styles.cardButton} onPress={() => {
            Alert.alert(
            "Email Request",
            "If you want to buy this estate you can send a request mail to the seller.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => Linking.openURL(`mailto:${properties.email}?subject=Buying Your Property Request&body=Hello! i want to buy your estate you can contact me using this mail if you are interested.`) }
            ]
          );    
          }}>Buy</Button>
    </Card.Actions>
  </Card>
       
      

        
    </>
    ))} 
    
    {vtext && (<Text style={{alignSelf:'center',marginTop:300,fontSize:20,}}>{vtext}</Text>)}
    </ScrollView>
    </View>   
    
    );
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:'#F3E9DD',  
    
  },
  mainCard:{
    margin:3,
    borderRadius:10,
    padding:2,
  },
  cardCover:{
    margin:7,
    borderRadius:10,
  },
  cardTitle:{
    fontSize:20,
  },
  cardKey:{
    fontSize:13,
    fontWeight:'bold',
    textAlign:'left',
  },
  cardPara:{
    fontSize:15,
  },
  cardVal:{
    fontSize:13,
    fontWeight:'bold',
    textAlign:'right',
    marginTop:-15,
    
  },
  cardButton:{
    
    
    borderWidth:2,
    borderColor:'#764AF1',
    borderRadius:5,
    height:45,
    width:70,
  },
  cardActions:{
    alignContent:'center',
    alignSelf:'center',
  },
  inputStyle: {
  
  width: 260,
  height: 40,
  paddingHorizontal: 10,
  borderRadius: 5,
  backgroundColor: '#fff',
},
scrollViewStyle: {
  margin:20,  
  padding: 10,
  justifyContent: 'center',
},

textbox:{
  
  flex:1,
  // flexDirection:'row',
  alignItems:'center',
  
},
btn:{
  color:'red',
},
});