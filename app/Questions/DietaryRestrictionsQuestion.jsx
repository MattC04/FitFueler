import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle'; // Ensure the correct path to your stylesheet

export default function DietaryRestrictionsQuestion({ onNext, onBack }) {
  const [selectedRestrictions, setSelectedRestrictions] = useState([]);

  const restrictions = ['Vegan', 'Vegetarian', 'Pescatarian', 'Gluten-Free', 'None'];

  const toggleRestriction = (restriction) => {
    if (selectedRestrictions.includes(restriction)) {
      setSelectedRestrictions(selectedRestrictions.filter(item => item !== restriction));
    } else {
      if (restriction === 'None') {
        setSelectedRestrictions(['None']);
      } else {
        setSelectedRestrictions([...selectedRestrictions.filter(item => item !== 'None'), restriction]);
      }
    }
  };

  const handleNext = () => {
    onNext('dietaryRestrictions', selectedRestrictions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select any dietary restrictions you have (or select None):</Text>
      {restrictions.map((restriction, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleRestriction(restriction)}
          style={[
            styles.optionButton,
            selectedRestrictions.includes(restriction) && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{restriction}</Text>
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
          disabled={selectedRestrictions.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}