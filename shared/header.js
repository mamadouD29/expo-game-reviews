import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {MaterialIcons} from "@expo/vector-icons"



export default function Header ({navigation, title}){
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.headerIcon}/>
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
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
    },
    headerTitle:{
        flexDirection: "row",
        alignItems: "center"

    },
    headerImage : {
        width: 20,
        height: 20,
        marginHorizontal: 10
        }
})