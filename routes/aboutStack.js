import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { globalStyles } from '../styles/globalStyles';
import About from '../screens/about';
import Header from '../shared/header';


const Stack = createNativeStackNavigator();



export default function AboutStack (){
    return (
      
            <Stack.Navigator>

                <Stack.Screen name='AboutStack' component={About} options={({navigation, route}) => ({
                    headerTitle:()=><Header navigation={navigation} title={"About"} />,
                })} />
          
            </Stack.Navigator>
    )
}