import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <View style={[styles.container, { height: size }]} >
      <View style={[styles.iconContainer, { width: size, height: size, borderRadius: size / 4 }]} >
        <Text style={[styles.icon, { fontSize: size * 0.6 }]} >💪</Text>
      </View>
      <View style={styles.textContainer} >
        <Text style={[styles.brandName, { fontSize: size * 0.7 }]} >Kine</Text>
        <Text style={[styles.tagline, { fontSize: size * 0.25 }]} >AI COACH</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    backgroundColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      web: {
        boxShadow: '0 4px 14px rgba(0, 212, 255, 0.3)',
      },
    }),
  },
  icon: {
    lineHeight: undefined,
  },
  textContainer: {
    justifyContent: 'center',
  },
  brandName: {
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -1,
  },
  tagline: {
    color: '#00d4ff',
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: -4,
  },
});
