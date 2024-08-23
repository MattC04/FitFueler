import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle'; 

export default function IntensityQuestion({ onNext, onBack }) {
  const [selectedDuration, setSelectedDuration] = useState('');

  const durations = ['4 weeks', '8 weeks', '12 weeks', '16 weeks'];

  const selectDuration = (duration) => {
    setSelectedDuration(duration);
  };

  const handleNext = () => {
    onNext('planDuration', selectedDuration);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How long do you want your personalized plan to be to achieve your goal?</Text>
      {durations.map((duration, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectDuration(duration)}
          style={[
            styles.optionButton,
            selectedDuration === duration && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{duration}</Text>
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
          disabled={!selectedDuration}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
