import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function ExerciseQuestion({ onNext, onBack }) {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleNext = () => {
    onNext('exerciseFrequency', selectedFrequency);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How often do you exercise?:</Text>
      {['Not at all', 'Rarely', 'Moderate', 'Often', 'Intensive'].map((frequency, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedFrequency(frequency)}
          style={{
            backgroundColor: selectedFrequency === frequency ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{frequency}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={!selectedFrequency} />
      </View>
    </View>
  );
}
