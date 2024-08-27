import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingVertical: 40,
    paddingTop: 100,
  },
  input: {
    width: width * 0.6, 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderBottomWidth: 0.7,
    borderColor: '#ccc',
    marginBottom: 10,
    fontFamily: 'raleway-regular',
  },
  button: {
    backgroundColor: '#1A274D',
    paddingVertical: 12, 
    paddingHorizontal: 30,
    borderRadius: 5,
    width: width * 0.6,
    marginVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16, 
    textAlign: 'center',
    fontFamily: 'raleway-bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#1A274D',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginLeft: 160,
  },
  forgotPasswordText: {
    color: '#C0C0C0',
    fontSize: 10,
    fontFamily: 'assets\fonts\static\Raleway-Italic.ttf',
    fontStyle: 'italic',
    textShadowColor: '#B0B0B0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  linkText: {
    color: '#A9A9A9',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'raleway-regular',
  },
  header: {
    fontFamily: 'raleway-bold',
    fontSize: 28, // Increase size for a larger, more noticeable header
    marginBottom: 20, // Add margin for spacing
    textAlign: 'center',
  },
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 18,
  },
  image: {
    width: 150, // Increase logo size
    height: 150,
    alignSelf: 'center',
    marginBottom: 30, // Increase margin for spacing
  },
});

export default LoginStyles;
