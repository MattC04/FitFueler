import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LoginStyles from '../styling/LoginStyles'; // Reusing the same styles for simplicity

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={LoginStyles.container}>
      <TouchableOpacity style={LoginStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={LoginStyles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <Text style={LoginStyles.header}>Forgot Password</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="Enter your email"
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={LoginStyles.button}>
        <Text style={LoginStyles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}