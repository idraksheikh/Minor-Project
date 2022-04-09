import React from 'react';
import { Button, View, Image, Text,StyleSheet } from 'react-native';
import navigationStrings from '../../Constraints/navigationStrings';
import Main from '../Main';

import Form from './Form';
  export default function Sell({ navigation }) {
   
    return (<>
      <Main/>
      <Form />
      </>
    );
  }

  