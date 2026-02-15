import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.inner}>
        <Hero />
        <Features />
        <Pricing />
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Kine. Your AI Fitness Coach.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: '100%',
    paddingHorizontal: width > 768 ? 48 : 16,
  },
  footer: {
    padding: 40,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    marginTop: 40,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
});
