import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import navigationStrings from '../../Constraints/navigationStrings';
import imagePath from '../../Constraints/imagePath';
import { sellDetails } from '../Sell/Form';




export default function Tiles() {
    // useEffect(()=>{
    //     console.log(sellDetails);
    // },[])
    return(
    <>
    <ScrollView>   
    <Tile
    imageSrc={imagePath.house1}
    activeOpacity={0.5}
    onPress={() => {
        alert('This page will forward you to details page');
      }}
    imageContainerStyle={{justifyContent: 'center'}}
    title="Address of Estate"
    // icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
    contentContainerStyle={{ height: 80 }}
    >
    <View
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
    >

        <Text>Rating</Text>
        <Text>Estimated Price</Text>
    </View>
    </Tile>

    <Tile
    imageSrc={imagePath.house2}
    activeOpacity={0.5}
    onPress={() => {
        alert('This page will forward you to details page');
      }}
    imageContainerStyle={{justifyContent: 'center'}}
    title="Address of Estate"
    // icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
    contentContainerStyle={{ height: 80 }}
    >
    <View
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
    >

        <Text>Rating</Text>
        <Text>Estimated Price</Text>
    </View>
    </Tile>

    <Tile
    imageSrc={imagePath.house3}
    activeOpacity={0.5}
    onPress={() => {
        alert('You tapped the tile!');
      }}
    imageContainerStyle={{justifyContent: 'center'}}
    title="Address of Estate"
    // icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
    contentContainerStyle={{ height: 80 }}
    >
    <View
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
    >

        <Text>Rating</Text>
        <Text>Estimated Price</Text>
    </View>
    </Tile>
    </ScrollView>
    </>
    
    
    );
}