import React, {useContext, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import styles from '../Components/Styles';
import {ChildAuthenticatedContext,AuthenticatedContext} from "../../backend/Contexts";
import {NavigationContainer} from "@react-navigation/native";


const StartPage = ({props, navigation }) => {
    const [pairingCode, setPairingCode] = useState("");
    const [ email,  setEmail ] = useState("");
    const [ password,  setPassword ] = useState("");

    async function validateParentAccount() {

        if (password == "" || email == ""){
            Alert.alert("Fields cannot be blank.");
            return;
        }

        // TODO: Ensure account is real
        // FOR PAGE TESTING PURPOSES
        //setAuthenticated(true);
        navigation.navigate('ParentDashboard');
        // FOR PAGE TESTING PURPOSES

        setEmail("");
        setPairingCode("");
        setPassword("");
    }

    async function validateChildAccount() {
        if (pairingCode == ""){
            Alert.alert("Code cannot be blank.");
            return;
        }

        //setChildAuthenticated(true);

        // TODO: Ensure code is real
        // FOR PAGE TESTING PURPOSES
        navigation.navigate('ChildInfo');

        // FOR PAGE TESTING PURPOSES

        setEmail("");
        setPairingCode("");
        setPassword("");

    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Sign In</Text>
                <CustomInput placeholder={"Email"} setText={(text) => setEmail(text)} value={email}/>
                <CustomInput placeholder={"Password"} setText={(text) => setPassword(text)} value={password} secure={true}/>
                <CustomButton myText={"Sign In"} onPress={validateParentAccount} ></CustomButton>
            </View>

            <View>
                <Text>or</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Pair to an account</Text>
                <CustomInput placeholder={"Enter pairing code"} setText={(text) => setPairingCode(text)} value={pairingCode}/>
                <CustomButton myText={"Pair"} onPress={validateChildAccount} ></CustomButton>
            </View>

            <Text>Don't have an account? <Text style={styles.registerButton} onPress={() => navigation.navigate('Register')} >Register</Text></Text>

        </View>
    );
}



export default StartPage;