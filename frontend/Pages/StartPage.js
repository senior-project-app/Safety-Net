import React, {useContext, useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import styles from '../Components/Styles';
import {AuthenticatedContext} from "../../backend/Contexts";

const StartPage = (props) => {
    const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);
    const [pairingCode, setPairingCode] = useState("");
    const [ email,  setEmail ] = useState("");
    const [ password,  setPassword ] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Sign In</Text>
                <CustomInput placeholder={"Email"} setText={(text) => setEmail(text)} value={email}/>
                <CustomInput placeholder={"Password"} setText={(text) => setPassword(text)} value={password}/>
                <CustomButton myText={"Sign In"} onPress={() => console.log(props)} ></CustomButton>
            </View>

            <View>
                <Text>or</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Pair to an account</Text>
                <CustomInput placeholder={"Enter pairing code"} setText={(text) => setPairingCode(text)} value={pairingCode}/>
                <CustomButton myText={"Pair"}></CustomButton>
            </View>

            <Text>Don't have an account? <Text style={styles.registerButton}>Register</Text></Text>

        </View>
    );
}


export default StartPage;