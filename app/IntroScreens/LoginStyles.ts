import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'raleway-regular', // Apply Raleway Regular font
  },
  button: {
    backgroundColor: '#1A274D',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'raleway-regular', // Apply Raleway Bold font
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '1A274D',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  linkText: {
    color: '#A9A9A9',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'raleway-regular',
  },
  header: {
    fontFamily: 'raleway-bold', // Apply Raleway Bold font
    fontSize: 24,
  },
  text: {
    fontFamily: 'raleway-regular', // Apply Raleway Regular font
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default LoginStyles;
