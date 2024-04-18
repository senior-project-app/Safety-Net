import React, {useContext, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";
import {NameContext} from "../../../backend/Context";
import {supabase} from "../../../backend/database";

const ChildInfo = ({ navigation }) => {
    const { name, setName, inviteCode, setInviteCode } = useContext(NameContext);

    async function validateName() {
        if(!name) return Alert.alert("You must enter your name");

        const fName = name.toLowerCase().replace(/ /g,"_");

        const { error } = await supabase.auth.signInWithPassword({
            email: `${inviteCode + fName}@safetynet.com`,
            password: inviteCode,
        });

        if (error) {
            Alert.alert("No user was found for that invite code. Please try again.");
            navigation.goBack();
        }
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>

            <View style={styles.child}>
                <Text style={styles.text}>What is your name?</Text>
                <Input placeholder={"Jane Doe"} setValue={setName} value={name}/>

                <Button text={"Confirm"} onPress={validateName}></Button>
            </View>
        </View>

    );

}

export default ChildInfo;