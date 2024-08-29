import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Dashboard</Text>
      {/* add content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C1B33',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'raleway-bold',
  },
});
