import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator>
        <Stack.Screen name="Welcome Scholars" component={Login}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

