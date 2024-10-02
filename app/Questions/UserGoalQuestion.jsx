import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle'; 

export default function UserGoalQuestion({ onNext }) {
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleNext = () => {
    onNext('userGoal', selectedGoal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your goal:</Text>
      {['Cutting', 'Bulking', 'Maintain'].map((goal, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedGoal(goal)}
          style={[
            styles.optionButton,
            selectedGoal === goal && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{goal}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={handleNext}
          style={styles.navigationButton}
          disabled={!selectedGoal}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}