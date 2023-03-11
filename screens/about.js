import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Home (){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About</Text>
        </View>
    )

}