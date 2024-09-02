import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Card from './Card'
import Calendar from './Calendar';

import styles from '../styling/DashboardStyle';

function ExpandableCard({ title, value, description, color, additionalContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <TouchableOpacity onPress={toggleExpand} style={[styles.card, { backgroundColor: color }]}>
      {isExpanded ? (
        <View style={styles.expandedCard}>
          {/* Display a blank card for expanded state */}
          <Text style={styles.expandedText}>Expanded Card (Blank)</Text>
        </View>
      ) : (
        <View style={styles.collapsedCard}>
          {/* Display initial information for collapsed state */}
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardValue}>{value}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
          {additionalContent && (
            <View style={styles.additionalContent}>{additionalContent}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

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
              additionalContent={
                <Text style={styles.additionalText}>Last Meal: In-N-Out Burger 1000 Calories</Text>
              }
            />
            <ExpandableCard
              title="Activity"
              value="30"
              description="Minutes"
              color="#4D9DE0"
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
              additionalContent={
                <Text style={styles.additionalText}>+10 pounds from the day before</Text>
              }
            />
            <ExpandableCard
              title="Macros"
              value="Carbs: 30g"
              description="Proteins: 20g"
              color="#ff5c8a"
              additionalContent={
                <View>
                  <Text style={styles.additionalText}>Fats: 50g</Text>
                  <Text style={styles.additionalText}>Fiber: 10g</Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}