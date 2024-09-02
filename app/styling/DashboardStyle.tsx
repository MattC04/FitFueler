import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dashboardText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'raleway-bold',
        textAlign: 'center', // center the text horizontally
    },
    todayText: {
        color: '#00FF00',
        fontSize: 16,
        fontFamily: 'raleway-regular',
        position: 'absolute', // positioning today text to be at the top-right
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
      height: 285,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 5,
      position: 'relative',
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
      fontFamily: 'raleway-bold',
      color: '#243B55',
    },
    cardTitle: {
      fontSize: 35,
      marginBottom: 10,
      color: '#333',
      fontFamily: 'raleway-bold',
    },
    cardValue: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'raleway-regular',
    },
    cardDescription: {
      fontSize: 20,
      color: '#333',
      fontFamily: 'raleway-regular',
    },
    additionalContent: {
      marginTop: 15,
      fontFamily: 'raleway-regular',
    },
    additionalText: {
      fontSize: 15,
      color: '#333',
      fontFamily: 'raleway-regular',
    },
  });

export default styles;