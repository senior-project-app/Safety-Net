import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Components/Styles';
import ChildSignIn from "./Child/ChildSignIn";
import ParentSignIn from "./Parent/ParentSignIn";

const StartPage = ({ navigation }) => {
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>

            <ParentSignIn/>

            <Text>or</Text>

            <ChildSignIn/>

            <Text>Don't have an account?
                <Text style={styles.registerButton} onPress={() => navigation.navigate('Register')}> Register</Text>
            </Text>

        </View>
    );
}



export default StartPage;