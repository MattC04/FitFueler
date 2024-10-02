import { StyleSheet } from 'react-native';

const simpleModalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background for pop-up
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      alignItems: 'center',
    },
    closeButton: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#243B55',
      borderRadius: 5,
    },
    closeButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'raleway-regular',
    },
    iconStyle: {
      position: 'absolute', // Absolute positioning to place the icon in the corner
      top: 10,
      right: 10,
    },
  });

export default simpleModalStyles;