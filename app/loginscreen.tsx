//handles login screen 
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //go to questions after login
  const handleLogin = () => {
    navigation.navigate('Questionnaire');
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
  button: { 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 5 
  },
  loginButton: { 
    backgroundColor: '#007BFF' 
  },
  createAccountButton: { 
    backgroundColor: '#28A745' 
  },
  forgotPasswordButton: { 
    backgroundColor: '#DC3545' 
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 16 
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  }
});
