import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bio</Text>
      <Text>Name: Pooja Salar</Text>
      <Text>Contact: poojasalar998@gmail.com</Text>
      <Text>Mo : 6476464198</Text>
      <Text>Skills: React Native, JavaScript, Node.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
