import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function PreferredCuisinesQuestion({ onNext, onBack }) {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisines = ['Asian', 'American', 'Italian', 'Mexican', 'Indian', 'Greek', 'Mediterranean'];

  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter(item => item !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const handleNext = () => {
    onNext('preferredCuisines', selectedCuisines);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select your preferred cuisines (you can choose multiple):</Text>
      {cuisines.map((cuisine, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleCuisine(cuisine)}
          style={{
            backgroundColor: selectedCuisines.includes(cuisine) ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{cuisine}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={selectedCuisines.length === 0} />
      </View>
    </View>
  );
}
