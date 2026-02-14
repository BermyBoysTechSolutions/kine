import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Platform 
} from 'react-native';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // TODO: Connect to backend/waitlist service
    alert(`Thanks! We'll notify you when Kine launches: ${email}`);
    setEmail('');
  };

  return (
    <View style={styles.hero}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>🚀 Launching Q2 2026</Text>
      </View>
      
      <Text style={styles.title}>
        Your Personal
      </Text>
      <Text style={styles.highlight}>
        AI Fitness Coach
      </Text>
      
      <Text style={styles.subtitle}>
        Talk naturally. Get real-time form feedback. Track nutrition with your voice.
        Your dedicated AI trainer — available 24/7.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Get Early Access</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>
        ✨ 500+ people already on the waitlist
      </Text>

      {/* Chat Preview */}
      <View style={styles.chatPreview}>
        <View style={styles.chatBubbleUser}>
          <Text style={styles.chatTextUser}>
            I ate 2 eggs and toast for breakfast
          </Text>
        </View>
        <View style={styles.chatBubbleAI}>
          <Text style={styles.chatTextAI}>
            That's 12g protein. Aim for 30g at breakfast to hit your goal 💪
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: 24,
    paddingTop: Platform.OS === 'web' ? 60 : 40,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#333',
  },
  badgeText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 56,
  },
  highlight: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00d4ff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    maxWidth: 600,
    marginBottom: 32,
    lineHeight: 28,
  },
  form: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    maxWidth: 500,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 16,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    color: '#666',
    fontSize: 14,
    marginBottom: 40,
  },
  chatPreview: {
    width: '100%',
    maxWidth: 400,
    gap: 12,
  },
  chatBubbleUser: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 16,
    borderBottomRightRadius: 4,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  chatTextUser: {
    color: '#fff',
    fontSize: 14,
  },
  chatBubbleAI: {
    backgroundColor: '#00d4ff',
    padding: 16,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  chatTextAI: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
});
