import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import styles from '../styling/DashboardStyle';
import simpleModalStyles from '../styling/ModalStyle';

// define the props type for better code readability and maintainability
interface ExpandableCardProps {
    title: string;
    value: string | string[]; // accept both string and array of strings
    description: string | string[];
    color: string;
    additionalContent?: React.ReactNode;
    iconName: string;
  }

// holds each card and displays information
export default function ExpandableCard({ title, value, description, color, additionalContent, iconName }) {
    // state to control modal visibility
    const [isModalVisible, setModalVisible] = useState(false); 
    // when called, sets isVisible to the opposite state
    const toggleModal = () => setModalVisible(!isModalVisible); // Toggle modal state
  
    return (
      <>
        {/* initial card */}
        {/* when clicked, toggleModal */}
        <TouchableOpacity onPress={toggleModal} style={[styles.card, { backgroundColor: color }]}>
          {/* Icon in the top-right corner */}
          <Ionicons
            name={iconName} 
            size={24}
            color="white"
            style={simpleModalStyles.iconStyle}
         />
          
          
          <View style={styles.collapsedCard}>
            {/* Display initial information for collapsed state */}
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
            {/* Display description as multiple lines if it's an array */}
            {Array.isArray(description) ? (
                description.map((item, index) => (
                    <Text key={index} style={styles.cardDescription}>{item}</Text>
                ))
            ) : (
                <Text style={styles.cardDescription}>{description}</Text>
            )}
            {additionalContent && <View style={styles.additionalContent}>{additionalContent}</View>}
          </View>
        </TouchableOpacity>
  
        {/* modal for the pop-up */}
        <Modal
          transparent={true} // modal background is blurred
          visible={isModalVisible}
          animationType="slide"  // basic pop-up effect
          onRequestClose={toggleModal} // when user attempts to close
        >
          {/* modal content */}
          <View style={simpleModalStyles.modalContainer}>
            <View style={simpleModalStyles.modalContent}>
              {/* display content in pop-up */}
              <Text style={styles.expandedText}>Detailed Information</Text>


              {/* PULL DATA OF THE WEEK AND PUT IT IN THERE IN THE FORM OF A GRAPH */}



              
               {/* close button */}
              <TouchableOpacity onPress={toggleModal} style={simpleModalStyles.closeButton}>
                <Text style={simpleModalStyles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  }