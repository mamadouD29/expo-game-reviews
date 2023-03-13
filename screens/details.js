import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/globalStyles';


export default function Details ({navigation, route}){

    const {item} = route.params;
    const rating = item.rating;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>Title: {item.title}</Text>
                <Text style={globalStyles.titleText}>Body: {item.body}</Text>
                
                <View style = {styles.rating}>
                    <Text style={globalStyles.titleText}>Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )

}


const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
})