import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import Input from "../Components/Input";
import Button from "../Components/Button";
import styles from "../Components/Styles";
import {supabase} from "../../backend/database";

function Register({navigation}) {
    const [name, setName] = useState("demo");
    const [email, setEmail] = useState("demo@demo.com");
    const [password, setPassword] = useState("password");
    const [confirm, setConfirm] = useState("password");

    async function validateAndRegister() {
        // check that all values are defined
        if (!name || !email || !password || !confirm) return Alert.alert("Fields cannot be blank.");

        // check that passwords match
        if (password !== confirm) return Alert.alert("Passwords must match!");

        // everything is good, try to register the user
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name.toLowerCase(),
                    role: "supervisor"
                }
            }
        });

        if (error) Alert.alert(error.message);
    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Register</Text>
                <Input placeholder={"Name"} setValue={setName} value={name}/>
                <Input placeholder={"Email"} setValue={setEmail} value={email}/>

                <Input placeholder={"Password"} setValue={setPassword} value={password} secure={true}/>
                <Input placeholder={"Confirm Password"} setValue={setConfirm} value={confirm} secure={true}/>
                <Button text={"Register"} onPress={validateAndRegister}/>
            </View>
        </View>
    );
}

export default Register;