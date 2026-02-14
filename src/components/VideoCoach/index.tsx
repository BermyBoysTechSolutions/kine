import React from 'react';
import { Platform } from 'react-native';
import VideoCoachWeb from './VideoCoach.web';
import VideoCoachNative from './VideoCoach.native';

export default function VideoCoach() {
  if (Platform.OS === 'web') {
    return <VideoCoachWeb />;
  }
  return <VideoCoachNative />;
}
