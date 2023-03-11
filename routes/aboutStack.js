import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { globalStyles } from '../styles/globalStyles';
import About from '../screens/about';



const Stack = createNativeStackNavigator();



export default function AboutStack (){
    return (
      
            <Stack.Navigator>

                <Stack.Screen name='About' component={About} options={{
                    title: "About",
                    headerStyle: {
                        backgroundColor: "rgb(45, 111, 235)",
                    }, headerTitleStyle: {
                        fontFamily: "orbitron-regular",
                    },headerTitleAlign: "center"
                }} />
          
            </Stack.Navigator>
    )
}