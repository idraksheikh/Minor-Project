import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function TabRoutes(){

return(<>

  <Drawer.Navigator drawerType={dimensions.width >= 768 ? 'permanent' : 'front'} screenOptions={{
        drawerStyle: {
        backgroundColor: '#EADEDE',      
        width: 240,
        },}}>
            <Drawer.Screen name="HomEstate" component={HomeScreen}  />
            <Drawer.Screen name="Buying" component={Buy} />
          
            <Drawer.Screen name="Selling" component={Sell} />
      </Drawer.Navigator> 
</>
)};