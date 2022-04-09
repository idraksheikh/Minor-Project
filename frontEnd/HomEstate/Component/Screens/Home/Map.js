import React, { Component } from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native';
import {Text, PermissionsAndroid} from 'react-native';

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
      <AutoHeightWebView
        source={{
          uri: 'https://homestate-map.netlify.app/'
        }}
        style={{ width: Dimensions.get('window').width, marginTop: 150 }}
        geolocationEnabled={true}
        thirdPartyCookiesEnabled={true}
        
      />
     </>
    );
  }