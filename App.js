import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.name}>Pooja Salar</Text>
        <Text style={styles.title}>PACE Student</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Information</Text>
        <Text style={styles.cardText}>📧 Email: poojasalar@gmail.com</Text>
        <Text style={styles.cardText}>📱 Phone: +1(647)-646-1234</Text>
      </View>

     
      {/* Skills Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Skills</Text>
        <Text style={styles.cardText}>• React Native</Text>
        <Text style={styles.cardText}>• JavaScript (ES6+)</Text>
        <Text style={styles.cardText}>• Git / GitHub</Text>
      </View>

      {/* Interests Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Interests</Text>
        <Text style={styles.cardText}>• 🎶Music</Text>
        <Text style={styles.cardText}>• 🌍 Traveling</Text>
      </View>

      {/* Social Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.githubButton]}>
          <Text style={styles.socialButtonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.linkedinButton]}>
          <Text style={styles.socialButtonText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f8ff', // Soft pastel blue background
    padding: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2b2b2b', 
  },
  title: {
    fontSize: 18,
    color: '#555555', 
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffffff', 
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b3b3b', 
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666666', 
    marginBottom: 6,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    backgroundColor: '#6a5acd', 
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  githubButton: {
    backgroundColor: '#333',
  },
  linkedinButton: {
    backgroundColor: '#0077b5', 
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
