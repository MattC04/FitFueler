import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  mealSection: {
    flexDirection: 'row', // Horizontal layout for meal title and add button
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '90%', // Adjust width for consistent alignment
    marginBottom: 20, // Spacing between meal sections
  },
  mealTitle: {
    fontSize: 20,
    fontFamily: 'raleway-bold',
    color: '#243B55', // Dark text for contrast with the white background
  },
  plusButton: {
    flexDirection: 'row',
    alignItems: 'center', // Center the plus sign and text
    backgroundColor: '#00FF00', // Green button background
    padding: 10,
    borderRadius: 5,
  },
  plusButtonText: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    color: '#243B55', // Dark color for the plus sign text
    marginRight: 10, // Spacing between + and "add item"
  },
  addItemText: {
    fontSize: 16,
    fontFamily: 'raleway-regular',
    color: '#243B55', // Dark color for "add item" text
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark translucent background for modal
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF', // White background for modal content
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'raleway-bold',
    color: '#243B55', // Dark modal title color
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F0F0F0', // Light grey input field background
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'raleway-regular',
    color: '#243B55',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  addButtonText: {
    color: '#243B55',
    fontFamily: 'raleway-bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontFamily: 'raleway-bold',
    fontSize: 16,
  },
});

export default styles;
