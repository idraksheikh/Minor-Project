import React, {  useState, useEffect } from "react";
import { View, StyleSheet, Text,  Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import GetLocation from 'react-native-get-location'

MapboxGL.setAccessToken("pk.eyJ1IjoiZ3VycHJlZXRhY2hpbnQiLCJhIjoiY2wwMTl0ZjhzMDI2YzNscGEybXQ2MnNvbiJ9.aNZsNi-jXP_wVCH47oNXzQ");

const Estate =(props)=> {

  const [loc, setLoc] = useState([75.8577, 22.7196]);
useEffect(()=>{
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
  .then(location => {
    console.log(location.latitude, location.longitude);
    setLoc(arr=> [location.longitude, location.latitude])
    
  })
  .catch(error => {
    const { code, message } = error;
    console.warn(code, message);
  })
},[]);
  

  // const [coordinates] = useState([{loc.latitude}, {loc.longitude}]);

   return (
    <View style={styles.page}>
       <View style={styles.container}>
         <MapboxGL.MapView style={styles.map}>
           <MapboxGL.Camera
             pitch={60}
             zoomLevel={19}
             centerCoordinate={loc}
             animationMode={'flyTo'}
            //  animationDuration={10}
           />
           <MapboxGL.PointAnnotation coordinate={loc} />
         </MapboxGL.MapView>
       </View>
     </View>
   );
}

const styles = StyleSheet.create({
 page: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#F5FCFF"
 },
 container: {
 height: '100%',
   width: '100%',
   backgroundColor: 'blue',
 },
 map: {
   flex: 1
 }
});

export default Estate;