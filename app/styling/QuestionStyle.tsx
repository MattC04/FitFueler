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
    fontFamily: 'raleway-bold', // Apply Raleway Bold font  
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
    fontFamily: 'raleway-regular',
  },
  navigationContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  navigationButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 10,
    width: '45%', 
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'raleway-bold', // Apply Raleway Bold font  
  },
});

export default styles;
