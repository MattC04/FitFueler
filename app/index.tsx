//handles navigation between screens
import React from 'react';
import {View, Text} from 'react-native';
import { useFonts} from '@expo-google-fonts/raleway';
import Apploading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './IntroScreens/LoginScreen';
import Questionnaire from './IntroScreens/QuestionScreen';
import CreateAccScreen from './IntroScreens/CreateAccScreen';
import ForgotPasswordScreen from './IntroScreens/ForgotScreen';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/amplifyconfiguration.json'; // Update the path to your configuration file if necessary
import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

Amplify.configure(awsconfig);
const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccScreen} // Add the new screen
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

