import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const features = [
  {
    icon: '🎙️',
    title: 'Voice Coaching',
    description: 'Talk to your AI trainer naturally. Ask questions, get real-time feedback, stay motivated.',
  },
  {
    icon: '📸',
    title: 'Form Analysis',
    description: 'Point your camera. Get instant feedback on your exercise form. Prevent injuries, maximize gains.',
  },
  {
    icon: '🥗',
    title: 'Smart Nutrition',
    description: 'Log meals with your voice. Get macro tracking, meal suggestions, and diet adjustments.',
  },
  {
    icon: '🤖',
    title: 'Dedicated AI',
    description: 'Pro plans get their own AI instance. Personalized memory, goals, and coaching style.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Visualize your gains. Track workouts, nutrition, body metrics over time.',
  },
  {
    icon: '⚡',
    title: 'Always Available',
    description: '5 AM workout? Midnight snack? Your AI trainer is always there.',
  },
];

export default function Features() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tag}>Features</Text>
        <Text style={styles.title}>One App. Everything You Need.</Text>
        <Text style={styles.subtitle}>
          No more juggling 5 different apps. Kine combines nutrition, training, and coaching in one seamless experience.
        </Text>
      </View>
      
      <View style={styles.grid}>
        {features.map((feature, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.icon}>{feature.icon}</Text>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingVertical: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  tag: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 24,
    width: 300,
    borderWidth: 1,
    borderColor: '#333',
  },
  icon: {
    fontSize: 32,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20,
  },
});
