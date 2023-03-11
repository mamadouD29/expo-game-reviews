import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from "./homeStack";
import AboutStack from './aboutStack';


const Drawer = createDrawerNavigator();

export default function MyDrawer (){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='Home' component={HomeStack} options={{Title: "Home"}} />
            {/* <Drawer.Group /> */}
            <Drawer.Screen name='About' component={AboutStack} />
        </Drawer.Navigator>
    )
}