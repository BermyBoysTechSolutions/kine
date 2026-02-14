import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

// Native version with camera support
export default function VideoCoach() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isActive, setIsActive] = useState(false);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions not granted yet
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tag}>Video Coaching</Text>
          <Text style={styles.title}>Camera Access Required</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Camera Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.tag}>Video Coaching</Text>
        <Text style={styles.title}>AI Form Analysis</Text>
        <Text style={styles.subtitle}>
          Point your camera at your workout. Get real-time feedback.
        </Text>
      </View>

      {isActive ? (
        <View style={styles.cameraContainer}>
          <CameraView 
            style={styles.camera} 
            facing="front"
            mode="video"
          >
            <View style={styles.overlay}>
              <View style={styles.feedbackBox}>
                <Text style={styles.feedbackText}>🎯 Analyzing form...</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.stopButton}
                onPress={() => setIsActive(false)}
              >
                <Text style={styles.stopButtonText}>Stop Session</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      ) : (
        <View style={styles.startContainer}>
          <View style={styles.previewCard}>
            <Text style={styles.previewIcon}>📹</Text>
            <Text style={styles.previewTitle}>Ready to Train?</Text>
            <Text style={styles.previewDescription}>
              Start a video coaching session and get real-time AI feedback on your form.
            </Text>
            
            <TouchableOpacity 
              style={styles.startButton}
              onPress={() => setIsActive(true)}
            >
              <Text style={styles.startButtonText}>Start Video Session</Text>
            </TouchableOpacity>
            
            <Text style={styles.note}>
              Uses ~5MB per minute • 480p quality for best performance
            </Text>
          </View>
        </View>
      )}
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
    marginBottom: 32,
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
    maxWidth: 400,
  },
  button: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startContainer: {
    alignItems: 'center',
  },
  previewCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 32,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  previewIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  previewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  previewDescription: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: '#00d4ff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  startButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
  cameraContainer: {
    alignItems: 'center',
  },
  camera: {
    width: width - 48,
    height: (width - 48) * 1.33,
    borderRadius: 16,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  feedbackBox: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 16,
    borderRadius: 12,
    alignSelf: 'center',
  },
  feedbackText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stopButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'center',
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
