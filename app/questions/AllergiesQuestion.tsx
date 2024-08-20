import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function AllergiesQuestion({ onNext, onBack }) {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const allergies = ['Peanuts', 'Shellfish', 'Dairy', 'Gluten', 'Soy', 'N/A'];

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select any allergies you have (or select N/A):</Text>
      {allergies.map((allergy, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleAllergy(allergy)}
          style={{
            backgroundColor: selectedAllergies.includes(allergy) ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{allergy}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={selectedAllergies.length === 0} />
      </View>
    </View>
  );
}
