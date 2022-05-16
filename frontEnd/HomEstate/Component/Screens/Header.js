import React from 'react';
import {View, Text, Image,StyleSheet,Button,Alert} from 'react-native';
import imagePath from '../Constraints/imagePath';


const   Header= ({ navigation })=>{
    
    return(
        <>
            <View style={styleMain.container}>
                <Image source={imagePath.logo} style={styleMain.img} />
                <Text style={styleMain.heading}>HomeEstate</Text>
                
            </View>
        </>
    );
} 
const styleMain=StyleSheet.create({
        container:{
            flexDirection:'row',
            display:'flex',
            height:40,
            backgroundColor:'#E9E5D6',
            alignItems: 'center',
            justifyContent: 'center'
            
        },
        img:{
            height:30,
            width:30,
            
            
        },
        heading:{
            marginTop:5,
            marginLeft:5,
            fontSize:20,
            color:'#1E5128',
        }

});
export default Header;
