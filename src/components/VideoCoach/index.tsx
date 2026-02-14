// Platform-agnostic wrapper that imports the correct implementation
import { Platform } from 'react-native';

// Import the appropriate implementation based on platform
let VideoCoach: React.FC;

if (Platform.OS === 'web') {
  VideoCoach = require('./VideoCoach.web').default;
} else {
  VideoCoach = require('./VideoCoach.native').default;
}

export default VideoCoach;
