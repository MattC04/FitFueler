import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle'; // Ensure the correct path to your stylesheet

export default function PreferredCuisinesQuestion({ onNext, onBack }) {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisines = ['Asian', 'American', 'Italian', 'Mexican', 'Indian', 'Greek', 'Mediterranean', 'N/A'];

  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter(item => item !== cuisine));
    } else {
      if (cuisine === 'N/A') {
        setSelectedCuisines(['N/A']); // Selecting "None" clears all other selections
      } else {
        setSelectedCuisines([...selectedCuisines.filter(item => item !== 'N/A'), cuisine]);
      }
    }
  };



  const handleNext = () => {
    onNext('preferredCuisines', selectedCuisines);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your preferred cuisines (you can choose multiple):</Text>
      {cuisines.map((cuisine, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleCuisine(cuisine)}
          style={[
            styles.optionButton,
            selectedCuisines.includes(cuisine) && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{cuisine}</Text>
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
          disabled={selectedCuisines.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
