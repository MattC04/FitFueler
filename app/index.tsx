//handles navigation between screens
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginscreen';
import Questionnaire from './questionnaire';

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
    </Stack.Navigator>
  );
}

