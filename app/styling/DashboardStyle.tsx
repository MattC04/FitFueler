import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1, // To make the gradient cover the entire screen
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginTop: 40,  // Adjust as necessary to center below the notch
  },  
});


export default styles;