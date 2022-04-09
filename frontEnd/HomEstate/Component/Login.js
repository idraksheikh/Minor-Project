import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image,Button} from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import navigationStrings from './Constraints/navigationStrings';
import {Home}  from './Screens/Index';


const Login=({navigation})=> {
  
  // const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  // const navigationOptions = ({navigation}) => { // use {} to object destructuring
  //   return {
  //       title: 'Review Jobs',
  //       headerRight: (<Title onPress={()=>{navigation.navigate(navigationStrings.HOME)}}>Settings</Title>)
  //   };
  
  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Welcome</Text>
        <Text style={styles.text}>Sign in to continue...</Text>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              type: 'email',
              name: 'email',

              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
              textInputProps: {
                label: 'Email',
              },
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
              textInputProps: {
                label: 'Password',
              },
            },
          ]}
        />
        <View style={{flexDirection: 'row'}}>       
          <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          // value={isSelected}
          // onValueChange={setSelection}
          onPress={() => {
          setChecked(!checked);
           }}
         /><Text style={{color: 'blue', fontSize: 14}}>Accept the Terms and Conditions: {checked ? "👍" : "👎"}</Text>
         
        </View>
        {/* <TouchableOpacity
         mode={'contained'}
         onPress={()=>{navigation.navigate(Home)}}
          activeOpacity={1}
          style={styles.button}
        >
           <Image source={imagePath.house3} style={{height: 40, width: 80, marginLeft: 2.5}} />
        </TouchableOpacity> */}
        <Button title='Submit'  onPress= {()=>{navigation.navigate('Home')}}/>
     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    textShadowRadius: 9,
    textShadowColor: '#FFFBF4',
  },
  text: {
    fontSize: 15,
    textShadowRadius: 2,
  },
  button: {
    height: 38,
    width: 85,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    opacity: 0.8
  },
});

export default Login;