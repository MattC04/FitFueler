import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

import UserGoalQuestion from '../questions/UserGoalQuestion';
import ExerciseQuestion from '../questions/ExerciseQuestion';
import MealsQuestion from '../questions/MealsQuestion';
import AllergiesQuestion from '../questions/AllergiesQuestion';
import DietaryRestrictionsQuestion from '../questions/DietaryRestrictionsQuestion';
import PreferredCuisinesQuestion from '../questions/PreferredCuisinesQuestion';
import IntensityQuestion from '../questions/IntensityQuestion';

import styles from "../styling/QuestionStyle";
import ProgressBar from '../questions/ProgressBar';

export default function QuestionScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const navigation = useNavigation(); // Use the navigation hook to access the navigator

  const totalSteps = 7;

  //called when clicked next button
  const handleNext = (key, value) => {
    //update responses state with user's answer
    setResponses({ ...responses, [key]: value });

    if (currentStep + 1 >= totalSteps) {
      //if the user has answered the last question, navigate to the Dashboard screen
      navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
    } else {
      //increment to the next question
      setCurrentStep(currentStep + 1); 
    }
  };

  //called when clicked back button
  const handleBack = () => {
    setCurrentStep(currentStep - 1); // move to the previous question
  };

  return (
    <LinearGradient
      colors={['#0C1B33', '#1A274D', '#243B55']} 
      style={styles.container}
    >
      <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
      {currentStep === 0 && <UserGoalQuestion onNext={handleNext}/>}
      {currentStep === 1 && <ExerciseQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <MealsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <AllergiesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <DietaryRestrictionsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 5 && <PreferredCuisinesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 6 && <IntensityQuestion onNext={handleNext} onBack={handleBack} />}
    </LinearGradient>
  );
}
