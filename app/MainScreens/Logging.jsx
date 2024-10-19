import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Calendar from './Calendar';
import styles from '../styling/LoggingScreenStyle';

export default function MealInputScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');
  const [foodInput, setFoodInput] = useState('');

  const openModal = (mealType) => {
    setSelectedMeal(mealType);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setFoodInput('');
  };

  const handleAddFood = () => {
    // Add food logic here
    closeModal();
  };

  return (
    <LinearGradient colors={['#0C1B33', '#1A274D', '#243B55']} style={styles.gradientBackground}>
      <View style={styles.container}>
        <Calendar />
        <ScrollView>
          <MealSection title="Breakfast" onAdd={() => openModal('Breakfast')} />
          <MealSection title="Lunch" onAdd={() => openModal('Lunch')} />
          <MealSection title="Dinner" onAdd={() => openModal('Dinner')} />
          <MealSection title="Snack" onAdd={() => openModal('Snack')} />
        </ScrollView>

        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Food to {selectedMeal}</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter food name..."
                value={foodInput}
                onChangeText={setFoodInput}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddFood}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}

const MealSection = ({ title, onAdd }) => (
  <View style={styles.mealSection}>
    <Text style={styles.mealTitle}>{title}</Text>
    <TouchableOpacity onPress={onAdd} style={styles.plusButton}>
      <Text style={styles.plusButtonText}>+</Text>
      <Text style={styles.addItemText}>Add item</Text>
    </TouchableOpacity>
  </View>
);
