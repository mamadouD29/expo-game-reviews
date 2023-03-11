import React, { useState } from 'react'
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Home ({navigation}){

    const [reviews, setReviews] = useState([
        {key: 1, title: "Mario Bros 2", rating: 5, body: "Lorem ipsum"},
        {key: 2, title: "Fifa 23", rating: 3, body: "Lorem ipsum"},
        {key: 3, title: "Unit 13", rating: 4, body: "Lorem ipsum"},
        {key: 4, title: "Zelda, Breath of fire ", rating: 5, body: "Lorem ipsum"},
        {key: 5, title: "Metroid", rating: 5, body: "Lorem ipsum"},
        {key: 6, title: "Mario Kart 8", rating: 3, body: "Lorem ipsum"},
    ])

    const pressHandler = ()=>{
        navigation.navigate("Details")
    }
    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({item})=> (
                <TouchableOpacity onPress={()=>navigation.navigate("Details",{ item})}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </TouchableOpacity>
                )}/>
        </View>
    )

}