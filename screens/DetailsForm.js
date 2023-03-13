import React from 'react'
import {StyleSheet, Button, TextInput, View, Text} from "react-native"
import { globalStyles } from '../styles/globalStyles'
import {Formik} from "formik";
import * as yup from "yup"
import FlatButton from '../shared/button';

const reviewSchema  = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(6),
    rating: yup.string().required().test("is-num-1-5", "Rating must be a number 1-5", (val)=> {
        return parseInt(val) < 6 && parseInt(val) > 0; 
    })
})


export  default function DetailsForm({addReview}){
    return (
        <View style={globalStyles.container}>
            <Formik initialValues={{title: "",body: "", rating: ""}} 
            validationSchema={reviewSchema}
            onSubmit={(values, actions)=>{
                actions.resetForm();
                addReview(values);
            }}>
                {(props)=>(
                    <View>
                        <TextInput style={globalStyles.input} pressHandler="Title" onChangeText={props.handleChange("title")} value={props.values.title} placeholder="Review Title"/>
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        
                        <TextInput style={globalStyles.input} multiline minHeight={100} pressHandler="body" onChangeText={props.handleChange("body")} value={props.values.body} placeholder="Review Body" />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        
                        <TextInput style={globalStyles.input} pressHandler="rating" onChangeText={props.handleChange("rating")} value={props.values.rating} placeholder="Rating 1-5" keyboardType='numeric' />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        
                        {/* <Button title='submit' color={"blue"} onPress={props.handleSubmit} /> */}
                        <FlatButton text={"Submit"} onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}