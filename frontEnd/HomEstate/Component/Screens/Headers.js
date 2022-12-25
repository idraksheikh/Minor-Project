import React from 'react';
import {View, Text, Image,StyleSheet,Button,Alert} from 'react-native';
import imagePath from '../Constraints/imagePath';
// import React from 'react';
// import { StatusBar } from 'react-native';
// import {View, Text, Image,StyleSheet, Button, Alert} from 'react-native';
// import imagePath from '../Constraints/imagePath';
// import { Header } from 'react-native-elements';


const   Headers= ({ navigation })=>{
    
    return(
        <>
            <View style={styleMain.container}>
                <Image source={imagePath.logo} style={styleMain.img} />
                <Text style={styleMain.heading}>HomeEstate</Text>
                
            </View>
            {/* <View style={styles.container}>
                <Header
         
                 // leftComponent={ }
                 centerComponent={<Text styles={styles.text}>HomEstate</Text>}
                
                 />
             
             </View> */}
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

// // const styles=StyleSheet.create({
// //     container:{
// //         flexDirection:'row',
// //         display:'flex',
// //         elevation: 10, 
// //         alignItems: 'center',
// //         justifyContent: 'center'
        
// //     },
// //         img:{
// //             height:30,
// //             width:30,
            
            
// //         },
// //         heading:{
// //             marginTop:5,
// //             marginLeft:5,
// //             fontSize:20,
// //             color:'#1E5128',
// //         },
// //         text: {
// //             fontSize: 20,
// //             fontFamily: 'Gill Sans',
// //             textAlign: 'auto',
// //             margin: 3,
// //             color: '#ffffff',
// //             backgroundColor: 'transparent',
// //           },

// });
export default Headers;
