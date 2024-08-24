import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle';

export default function ExerciseQuestion({ onNext, onBack }) {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleNext = () => {
    onNext('exerciseFrequency', selectedFrequency);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How often do you exercise?</Text>
      {['Not at all', 'Rarely', 'Moderate', 'Often', 'Intensive'].map((frequency, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedFrequency(frequency)}
          style={[
            styles.optionButton,
            selectedFrequency === frequency && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{frequency}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={onBack}
          style={styles.navigationButton}
        >
          <Text style={styles.nextButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          style={styles.navigationButton}
          disabled={!selectedFrequency}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
