//handles navigation between screens
import React from 'react';
import {View, Text} from 'react-native';
import { useFonts} from '@expo-google-fonts/raleway';
import Apploading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './IntroScreens/LoginScreen';
import QuestionScreen from './IntroScreens/QuestionScreen';
import ForgotPasswordScreen from './IntroScreens/ForgotScreen';
import DashboardScreen from './MainScreens/Dashboard';
import LoggingScreen from './MainScreens/Logging'

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="LoggingScreen">
        <Stack.Screen
        name="LoggingScreen"
        component={LoggingScreen}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
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
    </Stack.Navigator>
  );
}