//handles navigation between screens
import React from 'react';
import {View, Text} from 'react-native';
import { useFonts} from '@expo-google-fonts/raleway';
import Apploading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './IntroScreens/LoginScreen';
import QuestionScreen from './IntroScreens/QuestionScreen';


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
    </Stack.Navigator>
  );
}

