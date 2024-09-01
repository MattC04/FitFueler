import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import LoginStyles from './LoginStyles';
import { generateClient } from 'aws-amplify/api';  
import { createCreateUser } from '../../src/graphql/mutations';

const client = generateClient();  // creates the API client instance

export default function CreateAccScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match.');
      return;
    }
    //creating a new user
    try {
      const newCreateUser = await client.graphql({
        query: createCreateUser,
        variables: {
          input: {
            email, 
            password, 
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(), 
          }
        }
      });

      if (newCreateUser.data.createCreateUser) {
        Alert.alert('Success', 'Account created successfully.');
        navigation.navigate('LoginScreen');
      } else {
        throw new Error('Failed to create user.');
      }

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
