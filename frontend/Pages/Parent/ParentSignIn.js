import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";
import {supabase} from "../../../backend/database";

const ParentSignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function validateAndAuthenticate() {
        // check that all values are defined
        if (!email) return Alert.alert("Email cannot be blank.");
        if (!password) return Alert.alert("Password cannot be blank.");

        // everything is good, try to authenticate the user
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)

        const {
            data: { user },
        } = await supabase.auth.getUser()

        // console.log(user.user_metadata);
    }

    return (
        <View style={styles.child}>
            <Text style={styles.text}>Sign In</Text>
            <Input placeholder={"Email"} setValue={(text) => setEmail(text)} value={email}/>
            <Input placeholder={"Password"} setValue={(text) => setPassword(text)} value={password} secure={true}/>
            <Button text={"Sign In"} onPress={validateAndAuthenticate} ></Button>
        </View>
    );
}

export default ParentSignIn;