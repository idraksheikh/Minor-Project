import * as React from 'react';
import { Button, View, Image, Text,StyleSheet } from 'react-native';
import navigationStrings from '../../Constraints/navigationStrings';
import Main from '../Main';
import Tiles from './Tiles';


  
 export default function Buy({ navigation }) {
    return (<>
      <Main/>
      <Tiles/>
      </>
    );
  }