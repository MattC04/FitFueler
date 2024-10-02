import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle';

export default function MealsQuestion({ onNext, onBack }) {
  const [selectedMeals, setSelectedMeals] = useState('');

  const handleNext = () => {
    onNext('mealsPerDay', selectedMeals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How many meals do you eat per day?</Text>
      {['1', '2', '3', '4+'].map((meals, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedMeals(meals)}
          style={[
            styles.optionButton,
            selectedMeals === meals && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{meals}</Text>
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
          disabled={!selectedMeals}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}