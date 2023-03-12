import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"



export default function Header ({navigation, title}){
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.headerIcon}/>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width:  "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "rgb(69, 127, 237)",
        // borderWidth: 2,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "orbitron-regular",
        letterSpacing: 1,
    },
    headerIcon: {
        position: "absolute",
        left: 0
    }
})