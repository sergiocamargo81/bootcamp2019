import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
});

console.tron.log('hello world');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.welcome}>Spread Your Fire!!!</Text>
    </View>
  );
}
