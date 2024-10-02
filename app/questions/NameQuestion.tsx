import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native';
import styles from '../styling/QuestionStyle';

export default function NameQuestion({ onNext, onBack }) {
  const [name, setName] = useState('');

  const handleNext = () => {
    onNext('name', name);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.input}>
          <Text style={styles.header}>Enter your name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.navigationContainer}>
            <TouchableOpacity onPress={onBack} style={styles.navigationButton}>
              <Text style={styles.nextButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} style={styles.navigationButton} disabled={!name}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
