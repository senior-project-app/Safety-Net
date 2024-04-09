import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";
import {supabase} from "../../../backend/database";

const ChildSignIn = () => {
    const [pairingCode, setPairingCode] = useState("");
    async function validateAndPair() {
        // check that all values are defined
        if (!pairingCode) return Alert.alert("You must enter a pairing code.");

        // everything is good, try to pair the user
        // current idea: use the pair-code as a foreign key to link the two users
    }

    return (
        <View style={styles.child}>
            <Text style={styles.text}>Pair to an account</Text>
            <Input placeholder={"Enter pairing code"} setValue={(text) => setPairingCode(text)} value={pairingCode}/>
            <Button text={"Pair"} onPress={validateAndPair} ></Button>
        </View>
    );
}

export default ChildSignIn;