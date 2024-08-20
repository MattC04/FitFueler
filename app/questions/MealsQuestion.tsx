import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function MealsQuestion({ onNext, onBack }) {
  const [selectedMeals, setSelectedMeals] = useState('');

  const handleNext = () => {
    onNext('mealsPerDay', selectedMeals);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How many meals do you eat per day?</Text>
      {['1', '2', '3', '3+'].map((meals, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedMeals(meals)}
          style={{
            backgroundColor: selectedMeals === meals ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{meals}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={!selectedMeals} />
      </View>
    </View>
  );
}
