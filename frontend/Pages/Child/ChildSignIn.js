import React, {useContext} from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";
import { LogBox } from 'react-native';
import {NameContext} from "../../../backend/Context";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
const ChildSignIn = ({ navigation }) => {
    const { name, setName, inviteCode, setInviteCode } = useContext(NameContext);

    async function validateAndPair() {
        // check that all values are defined
        if (!inviteCode) return Alert.alert("You must enter a pairing code.");
        return navigation.navigate("EnterName");
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>

            <View style={styles.child}>
                <Text style={styles.text}>Pair to an account</Text>
                <Input placeholder={"Enter pairing code"} setValue={setInviteCode} value={inviteCode}/>
                <Button text={"Pair"} onPress={validateAndPair} ></Button>
            </View>

            <Text>Don't have an account?
                <Text style={styles.registerButton} onPress={() => navigation.navigate('Register')}> Register</Text>
            </Text>

        </View>


    );
}

export default ChildSignIn;