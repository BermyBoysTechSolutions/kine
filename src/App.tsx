import React from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import VideoCoach from './components/VideoCoach';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Hero />
      <Features />
      <VideoCoach />
      <Pricing />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 Kine. Your AI Fitness Coach.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
});
