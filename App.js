import React, { Component } from 'react';
import {
  Text, View, Image, TextInput, StyleSheet, ScrollView
} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactComponent from './StylingComponent';

const App = () =>
<View>
<ScrollView>
<SampleComponent/>
<StylingReactComponent />
</ScrollView>
</View>


export default App;
