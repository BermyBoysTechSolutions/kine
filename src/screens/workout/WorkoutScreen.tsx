import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useStore } from '../../store/useStore';
import { ExerciseLibrary } from './ExerciseLibrary';
import { ActiveWorkout } from './ActiveWorkout';

type TabType = 'library' | 'active';

export default function WorkoutScreen() {
  const activeWorkout = useStore((state) => state.workout.activeWorkout);
  const [activeTab, setActiveTab] = useState<TabType>(activeWorkout ? 'active' : 'library');

  // If there's an active workout, force the active tab unless user explicitly switches
  const currentTab = activeWorkout && activeTab === 'library' ? 'active' : activeTab;

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Segmented Control */}
      <View style={styles.segmentedControl}>
        <TouchableOpacity
          style={[
            styles.tab,
            currentTab === 'library' ? styles.activeTab : undefined,
          ]}
          onPress={() => handleTabChange('library')}
        >
          <Text
            style={[
              styles.tabText,
              currentTab === 'library' ? styles.activeTabText : undefined,
            ]}
          >
            Library
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            currentTab === 'active' ? styles.activeTab : undefined,
          ]}
          onPress={() => handleTabChange('active')}
        >
          <Text
            style={[
              styles.tabText,
              currentTab === 'active' ? styles.activeTabText : undefined,
            ]}
          >
            Active Workout
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {currentTab === 'library' ? (
          <ExerciseLibrary />
        ) : activeWorkout ? (
          <ActiveWorkout />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No active workout</Text>
            <Text style={styles.emptyStateSubtext}>
              Go to Library to start a workout
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    margin: 16,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#6366F1',
  },
  tabText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    color: '#9CA3AF',
    fontSize: 14,
  },
});
