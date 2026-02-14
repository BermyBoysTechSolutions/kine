import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Web version - shows fallback since camera isn't supported
export default function VideoCoach() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tag}>Video Coaching</Text>
        <Text style={styles.title}>Mobile-Only Feature</Text>
        <Text style={styles.subtitle}>
          Real-time form analysis with AI video coaching is available on our iOS and Android apps.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.icon}>📱</Text>
        <Text style={styles.cardTitle}>Download the App</Text>
        <Text style={styles.cardDescription}>
          Get personalized form feedback, rep counting, and real-time coaching on your mobile device.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Download for iOS</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Download for Android</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.alternative}>
        <Text style={styles.altTitle}>Or use Voice Coaching instead:</Text>
        <Text style={styles.altDescription}>
          Available on all platforms. Log nutrition, get workout advice, and track progress with voice commands.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingVertical: 60,
    backgroundColor: '#0f0f0f',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  tag: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    maxWidth: 500,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 32,
    maxWidth: 500,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  alternative: {
    marginTop: 40,
    alignItems: 'center',
    padding: 24,
  },
  altTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  altDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    maxWidth: 400,
  },
});
