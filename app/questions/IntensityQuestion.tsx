import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function IntensityQuestion({ onNext, onBack }) {
  const [selectedDuration, setSelectedDuration] = useState('');

  const durations = ['4 weeks', '8 weeks', '12 weeks', '16 weeks'];

  const selectDuration = (duration) => {
    setSelectedDuration(duration);
  };

  const handleNext = () => {
    onNext('planDuration', selectedDuration);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How long do you want your personalized plan to be to achieve your goal?</Text>
      {durations.map((duration, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectDuration(duration)}
          style={{
            backgroundColor: selectedDuration === duration ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{duration}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} disabled={!selectedDuration} />
      </View>
    </View>
  );
}
