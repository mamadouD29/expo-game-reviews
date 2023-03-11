import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from "./styles/globalStyles";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
import MyDrawer from './routes/drawer';

export default function App() {
  const [fontsLoaded] = useFonts({
    "orbitron-regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    "orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
      <NavigationContainer>
        <MyDrawer />
        {/* <HomeStack /> */}
      </NavigationContainer>
  );
}
