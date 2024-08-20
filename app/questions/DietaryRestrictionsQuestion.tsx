import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select any dietary restrictions you have (or select None):</Text>
      {restrictions.map((restriction, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleRestriction(restriction)}
          style={{
            backgroundColor: selectedRestrictions.includes(restriction) ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{restriction}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={selectedRestrictions.length === 0} />
      </View>
    </View>
  );
}
