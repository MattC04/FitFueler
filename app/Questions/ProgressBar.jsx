import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>Step {currentStep} of {totalSteps}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: -30,
    marginTop: 50,
  },
  progressText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'raleway-bold',
    marginBottom: 10,
  },
  progressBarContainer: {
    width: '90%',
    height: 8,
    backgroundColor: '#2c2c2e',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
});