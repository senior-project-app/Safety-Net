import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Components/Styles';
import ChildSignIn from "./Child/ChildSignIn";
import ParentSignIn from "./Parent/ParentSignIn";

const Login = ({ navigation }) => {
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>

            <ParentSignIn navigation={navigation}/>

            <Text>Don't have an account?
                <Text style={styles.registerButton} onPress={() => navigation.navigate('Register')}> Register</Text>
            </Text>

            <Text>or</Text>

            <Text>Have a pairing code?
                <Text style={styles.registerButton} onPress={() => navigation.navigate('Pair')}> Pair</Text>
            </Text>

        </View>
    );
}



export default Login;