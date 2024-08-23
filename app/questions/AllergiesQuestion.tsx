import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle';

export default function AllergiesQuestion({ onNext, onBack }) {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const allergies = ['Peanuts', 'Shellfish', 'Dairy', 'Gluten', 'Eggs', 'Soy', 'N/A'];

  const toggleAllergy = (allergy) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter(item => item !== allergy));
    } else {
      if (allergy === 'N/A') {
        setSelectedAllergies(['N/A']);
      } else {
        setSelectedAllergies([...selectedAllergies.filter(item => item !== 'N/A'), allergy]);
      }
    }
  };

  const handleNext = () => {
    onNext('allergies', selectedAllergies);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select any allergies you have:</Text>
      {allergies.map((allergy, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleAllergy(allergy)}
          style={[
            styles.optionButton,
            selectedAllergies.includes(allergy) && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{allergy}</Text>
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
          disabled={selectedAllergies.length === 0}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
