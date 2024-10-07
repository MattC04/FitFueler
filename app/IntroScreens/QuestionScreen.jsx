import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { FIREBASE_AUTH } from '../../firebaseconfig';

import UserGoalQuestion from '../Questions/UserGoalQuestion';
import ExerciseQuestion from '../Questions/ExerciseQuestion';
import MealsQuestion from '../Questions/MealsQuestion';
import AllergiesQuestion from '../Questions/AllergiesQuestion';
import DietaryRestrictionsQuestion from '../Questions/DietaryRestrictionsQuestion';
import PreferredCuisinesQuestion from '../Questions/PreferredCuisinesQuestion';
import IntensityQuestion from '../Questions/IntensityQuestion';
import EmailPasswordQuestion from '../Questions/EmailandPassword';
import NameQuestion from '../Questions/NameQuestion';
import styles from "../styling/QuestionStyle";
import ProgressBar from '../Questions/ProgressBar';


export default function QuestionScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const navigation = useNavigation(); 
  const auth = FIREBASE_AUTH;

  const totalSteps = 9;

  // called when clicked next button
  const handleNext = async (key, value) => {
    // update responses state with user's answer
    // setResponses({ ...responses, [key]: value });
    setResponses(prevResponses => ({ ...prevResponses, [key]: value }));

    // debug
    // console.log('Responses so far:', responses);

    // if the user has answered the last question
    if (currentStep + 1 >= totalSteps) {
      try {
        const email = responses.email;
        const password = responses.password

        // // debug
        // console.log("Creating account with email:", email);
        // console.log("Password:", password);

        const response = await createUserWithEmailAndPassword(auth, email, password);
        // some implementation to send email for user to 2-factor authentication
        navigation.navigate('Dashboard');
      } catch (error) {
        alert('Error creating account. Please try again.');
        console.error("Error creating account: ", error.message);
      }
    } else {
      setCurrentStep(currentStep + 1); 
    }
  };

  // called when clicked back button
  const handleBack = () => {
    setCurrentStep(currentStep - 1); // move to the previous question
  };

  return (
    <LinearGradient
      colors={['#0C1B33', '#1A274D', '#243B55']} 
      style={styles.container}
    >
      <ProgressBar currentStep={currentStep + 1} totalSteps={totalSteps} />
      {currentStep === 0 && <EmailPasswordQuestion onNext={handleNext} onBack = {handleBack}/>}
      {currentStep === 1 && <NameQuestion onNext={handleNext} onBack = {handleBack}/>}
      {currentStep === 2 && <UserGoalQuestion onNext={handleNext} onBack = {handleBack}/>}
      {currentStep === 3 && <ExerciseQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <MealsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 5 && <AllergiesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 6 && <DietaryRestrictionsQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 7 && <PreferredCuisinesQuestion onNext={handleNext} onBack={handleBack} />}
      {currentStep === 8 && <IntensityQuestion onNext={handleNext} onBack={handleBack} />}
    </LinearGradient>
  );
}