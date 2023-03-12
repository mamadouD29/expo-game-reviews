import React from 'react'
import {StyleSheet, Button, TextInput, View, Text} from "react-native"
import { globalStyles } from '../styles/globalStyles'
import {Formik} from "formik"


export  default function DetailsForm({addReview}){
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{title: "",body: "", rating: ""}} onSubmit={(values, actions)=>{
                actions.resetForm();
                addReview(values);
            }}>
                {(props)=>(
                    <View>
                        <TextInput style={globalStyles.input} pressHandler="Title" onChangeText={props.handleChange("title")} value={props.values.title} placeholder="Review Title"/>
                        
                        <TextInput style={globalStyles.input} pressHandler="body" onChangeText={props.handleChange("body")} value={props.values.body} placeholder="Review Body" />
                        
                        <TextInput style={globalStyles.input} pressHandler="rating" onChangeText={props.handleChange("rating")} value={props.values.rating} placeholder="Rating 1-5" keyboardType='numeric' />
                        
                        <Button title='submit' color={"blue"} onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}