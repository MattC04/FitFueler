import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function UserGoalQuestion({ onNext }) {
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleNext = () => {
    onNext('userGoal', selectedGoal);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select your goal:</Text>
      {['Cutting', 'Bulking', 'Maintain'].map((goal, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedGoal(goal)}
          style={{
            backgroundColor: selectedGoal === goal ? 'blue' : 'gray',
            margin: 5,
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>{goal}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={handleNext} disabled={!selectedGoal} />
    </View>
  );
}
