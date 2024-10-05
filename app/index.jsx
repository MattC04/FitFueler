//handles navigation between screens
import React from 'react';
import {View, Text} from 'react-native';
import { useFonts} from '@expo-google-fonts/raleway';
import Apploading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './IntroScreens/LoginScreen';
import QuestionScreen from './IntroScreens/QuestionScreen';
import ForgotPasswordScreen from './IntroScreens/ForgotScreen';
import Dashboard from './Dashboard/Dashboard';


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
        name="QuestionScreen"
        component={QuestionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen} 
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}