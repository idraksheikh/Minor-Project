import * as React from 'react'
import { Button, View, Image, Text, StyleSheet } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper'
import Routes from './Component/Navigation/Routes'
import store from './store'
import  FlashMessage from 'react-native-flash-message'

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#764AF1',
      accent: '#187498',
      
    },
  };
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
          <FlashMessage position="top" />
        </PaperProvider>
      </StoreProvider>
    </>
  )
}
