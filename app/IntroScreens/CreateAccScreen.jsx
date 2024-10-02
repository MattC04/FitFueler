import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LoginStyles from './LoginStyles';

export default function CreateAccScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle user sign up
  const handleSignUp = async () => {
      navigation.navigate('LoginScreen');

  };

  return (
    <View style={LoginStyles.container}>
      <TouchableOpacity style={LoginStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={LoginStyles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={LoginStyles.header}>Create Account</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="grey"
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="grey"
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={LoginStyles.button} onPress={handleSignUp}>
        <Text style={LoginStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}