import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format, addDays, startOfWeek } from 'date-fns';
// format is used to format dates into readable string 
// addDays is for adding certain number of days to a date --> addDays(date, #)
// startOfWeek returns start date of the week for a given gate 

import styles from '../styling/CalendarStyle'

export default function Calendar() {
  // get the current date using Date object
  const currentDate = new Date();
  // get the start of the week given a date (which is Sunday --> mapped to 0 by JS)
  const startOfTheWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  // creates array of 7 
  // _ represents current element (not used) and i is the index from 0-6
  // addDays computes date for each day of the week from startOfTheWeek so it does 
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(startOfTheWeek, i));

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.weekContainer}>
         {/* 
         weekDates is an array that holds dates for the current week.
         the map function iterates over each date 
         */}
        {weekDates.map((date, index) => (
          <View key={index} style={styles.dayContainer}>
            {/*
            for each new date, a new View is created for a container.
            the index is used as a key to identify each child.
            */}
            <Text style={styles.dayText}>{format(date, 'EEE')}</Text>
            {/* above:
            display day of the week and use 3-letter string
            */}
            {/* below:
            displays numeric date
            if the currentDate matches the date being rendered, then style it green
            if not then no additional style
            */}
            <Text
              style={[
                styles.dateText,
                currentDate.getDate() === date.getDate() ? styles.currentDateText : null,
              ]}
            >
              {format(date, 'd')}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

