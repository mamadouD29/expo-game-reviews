import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from "react-native"


export default function FlatButton({text, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style ={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: "#d9595d"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 15,
        textAlign: "center"
    }
})