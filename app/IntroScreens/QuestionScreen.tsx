//all the questions
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

import UserGoalQuestion from '../questions/UserGoalQuestion';
import ExerciseQuestion from '../questions/ExerciseQuestion';
import MealsQuestion from '../questions/MealsQuestion';
import AllergiesQuestion from '../questions/AllergiesQuestion';
import DietaryRestrictionsQuestion from '../questions/DietaryRestrictionsQuestion';
import PreferredCuisinesQuestion from '../questions/PreferredCuisinesQuestion';
import IntensityQuestion from '../questions/IntensityQuestion';
import EmailPasswordQuestion from '../questions/EmailPassQuestion';
import NameQuestion from '../questions/NameQuestion';

import styles from "../styling/QuestionStyle";
import ProgressBar from '../questions/ProgressBar';

export default function QuestionScreen({navigation}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});

  const totalSteps = 9;

  // Function to handle moving to the next step
  const handleNext = (key, value) => {
    setResponses({ ...responses, [key]: value });
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle moving to the previous step
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Format response (e.g., to convert arrays into comma-separated strings)
  const formatResponse = (key) => {
    const response = responses[key];
    return Array.isArray(response) ? response.join(', ') : response;
  };

  return (
    <LinearGradient
      colors={['#0C1B33', '#1A274D', '#243B55']} 
      style={styles.container}
    >
    {/* <View style={styles.container}> */}
      <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
      {currentStep === 0 && <EmailPasswordQuestion navigation={navigation} onNext={handleNext}/>}
      {currentStep === 1 && <NameQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <UserGoalQuestion onNext={handleNext}/>}
      {currentStep === 3 && <ExerciseQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <MealsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 5 && <AllergiesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 6 && <DietaryRestrictionsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 7 && <PreferredCuisinesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 8 && <IntensityQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep > 8 && (
        <View>
          <Text>Thank you for completing the questionnaire!</Text>
          <Text>User Goal: {formatResponse('userGoal')}</Text>
          <Text>Exercise Frequency: {formatResponse('exerciseFrequency')}</Text>
          <Text>Meals Per Day: {formatResponse('mealsPerDay')}</Text>
          <Text>Allergies: {formatResponse('allergies')}</Text>
          <Text>Dietary Restrictions: {formatResponse('dietaryRestrictions')}</Text>
          <Text>Preferred Cuisines: {formatResponse('preferredCuisines')}</Text>
          <Text>Plan Duration: {formatResponse('planDuration')}</Text>
        </View>
      )}
    {/* </View> */}
    </LinearGradient>
  );
}
