import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Details ({navigation, route}){

    const {item} = route.params;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Title: {item.title}</Text>
            <Text style={globalStyles.titleText}>Body: {item.body}</Text>
            <Text style={globalStyles.titleText}>Rating: {item.rating}</Text>
        </View>
    )

}