//handles navigation between screens
import React from 'react';
import {View, Text} from 'react-native';
import { useFonts, Raleway_400Regular} from '@expo-google-fonts/raleway';
import Apploading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './IntroScreens/LoginScreen';
import Questionnaire from './IntroScreens/QuestionScreen';
import CreateAccScreen from './IntroScreens/CreateAccScreen';
import ForgotPasswordScreen from './IntroScreens/ForgotScreen';

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

