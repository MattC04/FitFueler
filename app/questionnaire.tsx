//handles questionnaire logic
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import UserGoalQuestion from './questions/UserGoalQuestion';
import ExerciseQuestion from './questions/ExerciseQuestion';
import MealsQuestion from './questions/MealsQuestion';
import AllergiesQuestion from './questions/AllergiesQuestion';
import DietaryRestrictionsQuestion from './questions/DietaryRestrictionsQuestion';
import PreferredCuisinesQuestion from './questions/PreferredCuisinesQuestion';
import IntensityQuestion from './questions/IntensityQuestion';
import styles from "./styling/QuestionStyle";

export default function Questionnaire() {
  //keeps track of what state we are on
  const [currentStep, setCurrentStep] = useState(0);
  //stores user's answers
  const [responses, setResponses] = useState({});

  //called when clicked next button
  const handleNext = (key, value) => {
    //update responses state with user's answer
    setResponses({ ...responses, [key]: value });
    //increment to the next question
    setCurrentStep(currentStep + 1); 
  };

  //called wehn clicked back button
  const handleBack = () => {
    setCurrentStep(currentStep - 1); // Move to the previous question
  };

  //summary screen joins arrays into comma-separated strings for
  const formatResponse = (key) => {
    const response = responses[key];
    return Array.isArray(response) ? response.join(', ') : response;
  };

  return (
    <View style={styles.container}>
      {currentStep === 0 && <UserGoalQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 1 && <ExerciseQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <MealsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <AllergiesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <DietaryRestrictionsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 5 && <PreferredCuisinesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 6 && <IntensityQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep > 6 && (
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
    </View>
  );
}
