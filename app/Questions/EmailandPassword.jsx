import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';  
import styles from '../styling/QuestionStyle';

export default function EmailPassword({ onNext }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();  

    const handleNext = () => {
        onNext('email', email);
        onNext('password', password);
    };

    const handleBack = () => {
        navigation.navigate('LoginScreen');  
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Enter your Email and Password:</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
    
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
            />
    
            <View style={styles.navigationContainer}>
                <TouchableOpacity
                    onPress={handleBack}
                    style={styles.navigationButton}
                >
                    <Text style={styles.nextButtonText}>Back</Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    onPress={handleNext}
                    style={styles.navigationButton}
                    disabled={!email || !password}  // disable button if email or password is empty
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
