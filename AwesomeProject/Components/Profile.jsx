import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const Profile = () => {
  const user = {
    name: "Emma Porterwinkel",
    major: "Major: Advising",
    year: "Year: Super Duper Freshman",
    hobbies: "Hobbies: Additional Advising",
    biography: "Bio: I have the honor of being the program advisor for the Junior Flamingo Cohort. I truly love them beyond words and am a champion for the Five Guy's Hackathon Project. If I could, I would have given them the win already!!!",
    picture: require('./Media/Emma_PP.jpeg'), // Assuming the image is stored locally in the "Media" folder
    points: "6507 Sparkles"
};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={user.picture} style={styles.picture} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.points}>{user.points}</Text>
        <Text style={styles.major}>{user.major}</Text>
        <Text style={styles.year}>{user.year}</Text>
        <Text style={styles.hobbies}>{user.hobbies}</Text>
        <Text style={styles.biography}>{user.biography}</Text>
      </View>
      <Image source={require('./Media/MJLSP_Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative',
    backgroundColor: '#c5050c',
  },
  content: {
    alignItems: 'center',
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  points: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'gold',
  },
  major: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  year: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  hobbies: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 20,
    color: 'white',
  },
  biography: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 20, // Adjust as needed
    color: 'white',
  },
  logo: {
    position: 'absolute',
    bottom: 25,
    width: Dimensions.get('window').width,
    height: 150,
  },
});

export default Profile;