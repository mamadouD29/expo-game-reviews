import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from "./styles/globalStyles";
import { useFonts } from 'expo-font';
import Home from "./screens/home"

export default function App() {
  const [fontsLoaded] = useFonts({
    "orbitron-regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    "orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}
