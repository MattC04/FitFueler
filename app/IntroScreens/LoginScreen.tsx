//handles login screen 
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import LoginStyles from './LoginStyles';
import { LinearGradient } from 'expo-linear-gradient'; 
import {Auth} from 'aws-amplify';
import { signIn, type SignInInput } from 'aws-amplify/auth';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async() => {
  navigation.navigate('Questionnaire')

}
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <LinearGradient
      colors={['#0C1B33', '#1A274D', '#243B55']} // Gradient colors from bottom to top
      style={LoginStyles.container}
    >
    <View style={LoginStyles.container}>
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="white"
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="white"
      />
      <View style={LoginStyles.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={LoginStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      <TouchableOpacity 
        style={LoginStyles.button} 
        onPress={() => handleLogin({ username, password })}>
        <Text style={LoginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={LoginStyles.linkText}>Create Account</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}
