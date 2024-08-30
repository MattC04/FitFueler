import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Calendar from './Calendar';

import styles from '../styling/DashboardStyle';

export default function Dashboard() {
  return (
    <LinearGradient
      colors={['#0C1B33', '#1A274D', '#243B55']}  // Your gradient colors
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Calendar />
        {/* Future components like Food, Activity, etc., will go here */}
      </View>
    </LinearGradient>
  );
}