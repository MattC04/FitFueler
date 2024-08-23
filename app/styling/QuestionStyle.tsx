import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'Raleway_700Bold',  // Apply Raleway Bold for headers
  },
  optionButton: {
    backgroundColor: '#2c2c2e',
    margin: 5,
    padding: 15,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonSelected: {
    backgroundColor: 'green',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Raleway_400Regular',  // Apply Raleway Regular for options
  },
  navigationContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row', // This ensures the buttons are side by side
    justifyContent: 'space-between', // Space between the buttons
    alignItems: 'center', 
  },
  navigationButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 10,
    width: '45%', // Ensures each button takes up 45% of the width
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Raleway_700Bold',  // Apply Raleway Bold for buttons
  },
});

export default styles;
