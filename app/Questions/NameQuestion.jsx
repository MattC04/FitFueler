import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styling/QuestionStyle';

const NameBirthday = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleNext = () => {
    onNext('nameBirthday', { name, birthday });
  };

  const onChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setBirthday(selectedDate);
    }
    setShowPicker(false); // Hide the picker after selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your Name and Birthday:</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      {/* Birthday Picker */}
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
        <Text style={styles.dateText}>
          {birthday ? birthday.toLocaleDateString() : "Select your Birthday"}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()}  // Disallow future dates
        />
      )}

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={onBack} style={styles.navigationButton}>
          <Text style={styles.nextButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          style={styles.navigationButton}
          disabled={!name || !birthday}  // Disable button if name or birthday is not set
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NameBirthday;
