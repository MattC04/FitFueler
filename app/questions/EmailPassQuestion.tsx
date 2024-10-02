import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styling/QuestionStyle';

export default function EmailPasswordQuestion({ navigation, onNext }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    onNext('email', email);  // Store email in state
    onNext('password', password); // Store password in state
  };

  const handleBacktoLogin = () => {
    navigation.navigate('LoginScreen'); // Navigate back to LoginScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your email and password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handleBacktoLogin} style={styles.navigationButton}>
          <Text style={styles.nextButtonText}>Already have an account</Text> {/* Updated button text */}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.navigationButton} disabled={!email || !password}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
