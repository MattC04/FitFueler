import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle'; 
import auth from '@react-native-firebase/auth';

export default function IntensityQuestion({ onNext, onBack, userData, navigation }) {
  const [selectedDuration, setSelectedDuration] = useState('');

  const durations = ['4 weeks', '8 weeks', '12 weeks', '16 weeks'];

  const selectDuration = (duration) => {
    setSelectedDuration(duration);
  };

  const handleNext = async () => {
    try{
    onNext('planDuration', selectedDuration);
    const {email, password} = userData
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!', userCredential.user);

    // After creating the user, go to dashboard
    navigation.navigate('HomeScreen');
  } catch (error) {
    console.log('Error creating user:', error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How long do you want your personalized plan to be to achieve your goal?</Text>
      {durations.map((duration, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectDuration(duration)}
          style={[
            styles.optionButton,
            selectedDuration === duration && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionText}>{duration}</Text>
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
          disabled={!selectedDuration}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
