import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LoginStyles from './LoginStyles';
import { Auth } from 'aws-amplify';

export default function CreateAccScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle user sign up
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }

    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
      Alert.alert('Success', 'Account created successfully.');
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('Sign Up Error', error.message);
    }
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
