import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";

const ChildInfo = ({ navigation }) => {
    const [name, setName] = useState("");

    function validateName() {
        if (name) return Alert.alert("Code cannot be blank.");

        // name was defined, continue
        navigation.navigate('ChildDashboard');
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>What is your name?</Text>
            <Input placeholder={"Jane Doe"} setValue={setName} value={name}/>

            <Button text={"Confirm"} onPress={validateName}></Button>
        </View>
    );

}

export default ChildInfo;