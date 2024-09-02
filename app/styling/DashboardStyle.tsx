import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dashboardText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'raleway-bold',
        textAlign: 'center', // Center the text horizontally
    },
    todayText: {
        color: '#00FF00',
        fontSize: 16,
        fontFamily: 'raleway-regular',
        position: 'absolute', // Positioning today text to be at the top-right
        top: 0,
        right: 20,
      },
    gradientBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
    },
    gridContainer: {
      width: '90%',
      marginTop: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    card: {
      flex: 1,
      marginHorizontal: 5,
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 5,
    },
    collapsedCard: {
      alignItems: 'center',
    },
    expandedCard: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    expandedText: {
      fontSize: 18,
      color: '#ffffff',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    cardValue: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#333',
    },
    cardDescription: {
      fontSize: 16,
      color: '#333',
    },
    additionalContent: {
      marginTop: 10,
    },
    additionalText: {
      fontSize: 14,
      color: '#333',
    },
  });

export default styles;