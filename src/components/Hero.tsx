import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Platform,
  Dimensions 
} from 'react-native';
import Logo from './Logo';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`Thanks! We'll notify you when Kine launches: ${email}`);
    setEmail('');
  };

  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Logo size={36} />
      </View>

      {/* Main Content - Two Column on Desktop */}
      <View style={[styles.mainContent, !isMobile && styles.mainContentDesktop]}>
        {/* Left Column - Text and Form */}
        <View style={[styles.leftColumn, !isMobile && styles.leftColumnDesktop]}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🚀 Launching Q2 2026</Text>
          </View>
          
          <Text style={[styles.title, isMobile && styles.titleMobile]}>
            Your Personal
          </Text>
          <Text style={[styles.highlight, isMobile && styles.highlightMobile]}>
            AI Fitness Coach
          </Text>
          
          <Text style={[styles.subtitle, isMobile && styles.subtitleMobile]}>
            Talk naturally. Get real-time form feedback. Track nutrition with your voice.
            Your dedicated AI trainer — available 24/7.
          </Text>

          <View style={[styles.form, isMobile && styles.formMobile]}>
            <TextInput
              style={[styles.input, isMobile && styles.inputMobile]}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={[styles.button, isMobile && styles.buttonMobile]} onPress={handleSubmit}>
              <Text style={[styles.buttonText, isMobile && styles.buttonTextMobile]}>Get Early Access</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.note}>
            ✨ 500+ people already on the waitlist
          </Text>
        </View>

        {/* Right Column - Chat Demo */}
        <View style={[styles.rightColumn, !isMobile && styles.rightColumnDesktop]}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'web' ? 24 : 16,
    paddingBottom: 60,
  },
  header: {
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  mainContent: {
    flexDirection: 'column',
  },
  mainContentDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
  },
  leftColumn: {
    flex: 1,
    paddingHorizontal: 16,
  },
  leftColumnDesktop: {
    flex: 1.2,
    paddingHorizontal: 0,
  },
  rightColumn: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  rightColumnDesktop: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  badge: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#333',
    alignSelf: 'flex-start',
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
    lineHeight: 56,
  },
  titleMobile: {
    fontSize: 32,
    lineHeight: 40,
  },
  highlight: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: 16,
  },
  highlightMobile: {
    fontSize: 36,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
    maxWidth: 500,
    marginBottom: 32,
    lineHeight: 28,
  },
  subtitleMobile: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  form: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    maxWidth: 500,
  },
  formMobile: {
    flexDirection: 'column',
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
  inputMobile: {
    width: '100%',
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonMobile: {
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextMobile: {
    textAlign: 'center',
  },
  note: {
    color: '#666',
    fontSize: 14,
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
