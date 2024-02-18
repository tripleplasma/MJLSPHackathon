import React, {useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, FlatList, Text, View, Image, TextInput, Button} from 'react-native';
import Login from "./Login";
import Profile from "./Profile";

const dataID = [
  { id: '1', username: 'Ryan Bouchard', post: 'Join us for our monthly class meeting  this Tuesday at 5:30pm at Bascom Hill!', profilePic: require('../Photos/RyanB.png'), postImage: require('../Photos/2.png') },
  { id: '2', username: 'Emma PorterWinkel', post: 'Wishing everyone good luck on their finals next week!', profilePic: require('../Photos/EmmaP.jpeg'), postImage: require('../Photos/3.png')},
  { id: '3', username: 'Xai Pha', post: 'Come help build our app! \nFeb 18th: 8am-8pm Location: \nComputer Sciences', profilePic: require('../Photos/XaiP.png'), postImage: require('../Photos/1.png')},
  { id: '4', username: 'Emma PorterWinkel', post: 'Welcome to our new app!', profilePic: require('../Photos/EmmaP.jpeg')},
  // Add more data as needed
];
  
const HomePage = ({navigation, route}) => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    // const requestOptions = { 
    //   method: 'GET', 
    //   headers: { 'Content-Type': 'application/json' }, 
    //   body: JSON.stringify({id:route.params.id}) 
    // }; 
    // try {
    //   const response = await fetch('http://10.141.188.35:3000/user',requestOptions);
    //   const json = await response.json();
    //   setData(json);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
          <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
          />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={dataID}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.profileContainer}>
              <Image source={item.profilePic} style={styles.profilePic} />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <Text style={styles.post}>{item.post}</Text>
            <Image source={item.postImage} style={styles.postImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5050C',
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
  postContainer: {
    backgroundColor: '#800000', // Maroon color
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  post: {
    color: 'white',
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 0,
  },
});


export default HomePage;