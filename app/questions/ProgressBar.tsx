import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressText}>Step {currentStep} of {totalSteps}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progressPercentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressTextContainer: {
    marginBottom: 10,
  },
  progressText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Raleway_700Bold',
  },
  progressBar: {
    width: '90%',
    height: 8,
    backgroundColor: '#2c2c2e',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: 'green',
  },
});
