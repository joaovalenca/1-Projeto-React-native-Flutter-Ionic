import { StatusBar } from 'expo-status-bar';
import React from 'react';
import office from './src/images/office.jpg';
import {Image, StyleSheet, Text, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#006400', fontSize:18}}>João Vitor Valença</Text>
      <Image source={office} style={{width:305, height:159}}/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
