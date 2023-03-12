import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from '../screens/home';
import Details from '../screens/details';
import { globalStyles } from '../styles/globalStyles';
import Header from '../shared/header';



const Stack = createNativeStackNavigator();




export default function HomeStack (){
    return (
      
            <Stack.Navigator >

                <Stack.Screen name='HomeStak' component={Home}  options={({navigation, route}) => ({
                    headerTitle:()=><Header navigation={navigation} title={"Home"} />,
                    headerTitleStyle: {
                        fontFamily: "orbitron-regular"
                    }
                })}/>
                <Stack.Screen name='Details' component={Details} options={{
                    title: "Details",
                    headerStyle: {
                        // backgroundColor: "rgb(45, 111, 235)",
                    }, headerTitleStyle: {
                        fontFamily: "orbitron-regular",
                    },headerTitleAlign: "center"
                }} />
          
            </Stack.Navigator>
    )
}