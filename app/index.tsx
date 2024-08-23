//handles navigation between screens
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginscreen';
import Questionnaire from './questionnaire';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function Index() {

    // Load the fonts
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  // If the fonts are not yet loaded, show the AppLoading screen
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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

