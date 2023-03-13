import React, { Children } from "react";
import { StyleSheet, View } from "react-native";


export default function Card({children}) {

    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
        )
}



const styles = StyleSheet.create({
    card: {
        // padding: 5,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: .4,
        shadowRadius: 10,
        marginHorizontal: 4,
        marginVertical: 6,

    },
    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    }
})