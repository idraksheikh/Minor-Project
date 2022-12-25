import React, { Component } from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native';
import {Text, PermissionsAndroid,View,ScrollView,StyleSheet} from 'react-native';

PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  {
    title: 'Location Access Permission',
    message: 'We would like to use your location',
    buttonPositive: 'Okay'
  }
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Map(){

    return (
        <>
        <View style={styles.containerStyle}>
        
        <AutoHeightWebView
        source={{
          uri: 'https://share.streamlit.io/idraksheikh/homeestateprediction/app.py'
        }}
        style={{ width: Dimensions.get('window').width,}}
        geolocationEnabled={true}
        thirdPartyCookiesEnabled={true}
        
      />

        
        </View>
     
     </>
    );
  }

  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor:'#4c669f',  
      
    },
    scrollViewStyle: {
      margin:20,  
      padding: 10,
      justifyContent: 'center',
    },
  })