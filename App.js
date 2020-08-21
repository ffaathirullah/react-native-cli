import React, { Component } from 'react';
import {
  Text, View, Image, TextInput, StyleSheet,
} from 'react-native';
import gambar from './gambar.png';

const App = () => <StylingReactComponent />;

const StylingReactComponent = () => (
  <View>
    <Text style={styles.text}>Styling Component</Text>
    <View style={{
      width: 100, height: 100, backgroundColor: 'blue', borderWidth: 2, borderColor: 'red', margin: 20,
    }}
    />
    <View style={{
      margin: 12, padding: 12, backgroundColor: '#f2f2', width: 212,
    }}
    >
      <Image source={gambar} style={{ width: 188, height: 107, borderRadius: 8 }} />
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 12 }}> Kelebihan Jest </Text>
      <Text style={{
        fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12,
      }}
      >
        {' '}
        Price : 200000
      </Text>
      <Text style={{
        fontSize: 12, fontWeight: '300', color: 'black', marginTop: 6,
      }}
      >
        {' '}
        Bandung Barat
      </Text>
      <View style={{
        backgroundColor: '#6fcf97', borderRadius: 25, paddingVertical: 6, marginTop: 12,
      }}
      >
        <Text style={{
          fontSize: 14, fontWeight: '200', color: 'white', textAlign: 'center',
        }}
        >
          {' '}
          BELI
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    margin: 20,
  },
});
const SampleComponent = () => (
  <View>
    <View style={{ width: 80, height: 80, backgroundColor: '#1abc9c' }} />
    <Home />
    <Photo />
    <Text> Fachrul </Text>
    <Text> Agus </Text>
    <TextInput style={{ borderWidth: 1 }} />
    <BoxGreen />
    <Profile />
  </View>
);
const Home = () => <Text> Fachrul ahoy </Text>;

const Photo = () => <Image source={{ uri: 'http://placeimg.com/100/100/animals' }} style={{ width: 100, height: 100 }} />;

class BoxGreen extends Component {
  render() {
    return <Text> Ini component react </Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'http://placeimg.com/100/100/tech' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
        <Text> ini source </Text>
      </View>
    );
  }
}

export default App;
