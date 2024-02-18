import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Login = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://192.168.1.244:3000/users');
      //console.log(response);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.name}, {item.email}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default Login;