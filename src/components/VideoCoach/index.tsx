import React from 'react';
import { Platform } from 'react-native';

// Lazy import to prevent web from loading native modules
const VideoCoachWeb = React.lazy(() => import('./VideoCoach.web'));

// For native, we'll use a placeholder since we can't lazy import native modules easily
export default function VideoCoach() {
  if (Platform.OS === 'web') {
    return (
      <React.Suspense fallback={null}>
        <VideoCoachWeb />
      </React.Suspense>
    );
  }
  
  // Native placeholder - actual native implementation would be here
  return null;
}
