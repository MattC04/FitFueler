//handles login screen 
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import LoginStyles from '../styling/LoginStyles';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //go to dashboard after login
  const handleCreateAccount = () => {
    navigation.navigate('QuestionScreen');
  };

  const handleLogin = () => {
    navigation.navigate();
  }
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
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
      <TouchableOpacity style={[LoginStyles.button, LoginStyles.button]} onPress={handleLogin}>
        <Text style={LoginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={LoginStyles.linkText}>Create Account</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
