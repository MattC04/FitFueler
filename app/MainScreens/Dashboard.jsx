import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Calendar from './Calendar';
import styles from '../styling/DashboardStyle';

import ExpandableCard from './ExpandableCard';

export default function Dashboard() {
  return (
    <LinearGradient colors={['#0C1B33', '#1A274D', '#243B55']} style={styles.gradientBackground}>
      <View style={styles.container}>
        <Calendar />

        
        <View style={styles.gridContainer}>
          {/* Row 1 */}
          <View style={styles.row}>
            <ExpandableCard
              title="Food"
              value="2,000"
              description="Calories"
              color="#F6AE2D"
              iconName="fast-food" 
              additionalContent={
                <Text style={styles.additionalText}>Last Meal: In-N-Out Burger 1000 Calories</Text>
              }
            />
            <ExpandableCard
              title="Activity"
              value="30"
              description="Minutes"
              color="#4D9DE0"
              iconName="barbell"
              additionalContent={
                <Text style={styles.additionalText}>1000 Calories burned from activity</Text>
              }
            />
          </View>
          
          {/* Row 2 */}
          <View style={styles.row}>
            <ExpandableCard
              title="Weight"
              value="190"
              description="Pounds"
              color="#90BE6D"
              iconName="body"
              additionalContent={
                <Text style={styles.additionalText}>+10 pounds from the day before</Text>
              }
            />
            <ExpandableCard
              title="Macros"
              value= ""
              description={["Carbs: 30g", "Proteins: 20g", "Fats: 50g", "Fiber: 10g"]} 
              color="#ff5c8a"
              iconName="nutrition"
              additionalContent={null}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}