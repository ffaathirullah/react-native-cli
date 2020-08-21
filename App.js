/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
  <View>
    <View style={{ width: 80, height: 80, backgroundColor: '#1abc9c' }} />
    <Home />
    <Photo />
    <Text> Fachrul </Text>
    <Text> Agus </Text>
    <TextInput style={{borderWidth:1}}/>
  </View>
  );
};

const Home = () => {
  return <Text> Fachrul ahoy </Text>;
};

const Photo = () => {
  return <Image source={{uri : 'http://placeimg.com/100/100/animals'}} style={{width:100, height:100}}/>;
};

export default App;
