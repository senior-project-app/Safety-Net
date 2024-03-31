import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import { styles } from '../../App';

const StartPage = () => {
    const [pairingCode, setPairingCode] = useState("");
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Sign In</Text>
                <CustomInput placeholder={"Email"} setText={setPairingCode} value={pairingCode}/>
                <CustomInput placeholder={"Password"} setText={setPairingCode} value={pairingCode}/>
                <CustomButton myText={"Sign In"}></CustomButton>
            </View>

            <View>
                <Text>or</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Pair to an account</Text>
                <CustomInput placeholder={"Enter pairing code"} setText={setPairingCode} value={pairingCode}/>
                <CustomButton myText={"Pair"}></CustomButton>
            </View>

            <Text>Don't have an account? <Text style={styles.registerButton}>Register</Text></Text>

        </View>
    );
}


export default StartPage;