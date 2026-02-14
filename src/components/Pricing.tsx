import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const plans = [
  {
    name: 'Basic',
    price: '39',
    description: 'Perfect for nutrition tracking and basic guidance',
    features: [
      'Voice nutrition logging',
      'Macro tracking',
      'Basic workout plans',
      'Email support',
      'Shared AI instance',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '99',
    description: 'Your dedicated AI trainer with live video',
    features: [
      'Everything in Basic',
      '60 min live AI video coaching/month',
      'Form analysis via camera',
      'Dedicated AI instance',
      'Priority support',
      'Custom workout plans',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '179',
    description: 'Maximum personalization and support',
    features: [
      'Everything in Pro',
      '180 min live AI video coaching/month',
      '2x faster AI responses',
      'Weekly coach check-ins',
      'Advanced analytics',
      'Custom meal plans',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tag}>Pricing</Text>
        <Text style={styles.title}>Simple, Transparent Pricing</Text>
        <Text style={styles.subtitle}>
          Start with Basic. Upgrade as you grow. No hidden fees.
        </Text>
      </View>

      <View style={styles.grid}>
        {plans.map((plan, index) => (
          <View 
            key={index} 
            style={[
              styles.card, 
              plan.popular && styles.popularCard
            ]}
          >
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>Most Popular</Text>
              </View>
            )}
            
            <Text style={styles.planName}>{plan.name}</Text>
            
            <View style={styles.priceRow}>
              <Text style={styles.currency}>USD</Text>
              <Text style={styles.price}>{plan.price}</Text>
              <Text style={styles.period}>/month</Text>
            </View>
            
            <Text style={styles.description}>{plan.description}</Text>
            
            <View style={styles.featureList}>
              {plan.features.map((feature, i) => (
                <View key={i} style={styles.featureItem}>
                  <Text style={styles.check}>✓</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            
            <TouchableOpacity 
              style={[
                styles.button,
                plan.popular && styles.popularButton
              ]}
            >
              <Text style={[
                styles.buttonText,
                plan.popular && styles.popularButtonText
              ]}>
                Join Waitlist
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.note}>
        🎉 Founding members get 30% off for life. Limited to first 100 users.
      </Text>
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
    maxWidth: 500,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 32,
    width: 320,
    borderWidth: 1,
    borderColor: '#333',
    position: 'relative',
  },
  popularCard: {
    borderColor: '#00d4ff',
    borderWidth: 2,
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#00d4ff',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  currency: {
    color: '#666',
    fontSize: 18,
    marginRight: 4,
  },
  price: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  period: {
    color: '#666',
    fontSize: 16,
    marginLeft: 4,
  },
  description: {
    color: '#999',
    fontSize: 14,
    marginBottom: 24,
  },
  featureList: {
    gap: 12,
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  check: {
    color: '#00d4ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureText: {
    color: '#ccc',
    fontSize: 14,
  },
  button: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  popularButton: {
    backgroundColor: '#00d4ff',
    borderColor: '#00d4ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  popularButtonText: {
    color: '#000',
  },
  note: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 32,
  },
});
