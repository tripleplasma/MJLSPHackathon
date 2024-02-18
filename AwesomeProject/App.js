import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
      />
      <Button
      title="Go to Login"
      onPress={() =>
        navigation.navigate('Login')
      }
      />
      <Button
      title="Go to HomePage"
      onPress={() =>
        navigation.navigate('HomePage')
      }
      />
    </View>
    
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Welcome"}}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
