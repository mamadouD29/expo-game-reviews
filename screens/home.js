import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Keyboard,TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from "../shared/card"
import {MaterialIcons} from "@expo/vector-icons";
import DetailsForm from './DetailsForm';

export default function Home ({navigation}){
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        {key: 1, title: "Mario Bros 2", rating: 5, body: "Lorem ipsum"},
        {key: 2, title: "Fifa 23", rating: 3, body: "Lorem ipsum"},
        {key: 3, title: "Unit 13", rating: 4, body: "Lorem ipsum"},
        {key: 4, title: "Zelda, Breath of fire ", rating: 5, body: "Lorem ipsum"},
        {key: 5, title: "Metroid", rating: 5, body: "Lorem ipsum"},
        {key: 6, title: "Mario Kart 8", rating: 3, body: "Lorem ipsum"},
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currReviews)=>{
            return [review, ...currReviews]
        })
        setModalOpen(false);
    } 

    const pressHandler = ()=>{
        navigation.navigate("Details")
    }
    return (
        <View style={globalStyles.container} >


            <Modal visible ={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


                <View style={styles.modalContent}>

                    <MaterialIcons name='close' size={24} onPress={()=>setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalClose}} />
                    {/* <Text>Hello </Text> */}
                    <DetailsForm addReview={addReview} />
                </View>
            </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name='add' style={styles.modalToggle} size={24} onPress={()=>setModalOpen(true)} />

            <FlatList data={reviews} renderItem={({item})=> (

                <TouchableOpacity onPress={()=>navigation.navigate("Details",{ item})}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
                )}/>
        </View>
    )

}


const styles = StyleSheet.create({
    modalContent: {
        margin: 20,
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth:1,
        borderColor: "#c9c7c7",
        padding: 10,
        alignSelf: "center",
        borderRadius: 10,

    },
    modalClose:{
        marginTop: 20, 
        marginBottom: 0,
    }
})