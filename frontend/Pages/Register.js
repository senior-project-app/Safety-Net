import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import Input from "../Components/Input";
import Button from "../Components/Button";
import styles from "../Components/Styles";
import axios from 'axios';

function Register({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    async function validateAndRegister() {
        // check that all values are defined
        if (!name || !email || !password || !confirm) return Alert.alert("Fields cannot be blank.");

        // check that passwords match
        if (password !== confirm) return Alert.alert("Passwords must match!");

        // everything is good, try to register the user
        await register()
            .then((res) => {
                console.log("success");
            })
            .catch((err) => {
                // failure
                console.log("failure");
            });
    }

    async function register() {
        const url = "http://172.16.134.148:5000/register"; // TODO: UPDATE WHEN WE DEMO, MUST BE DEVICE LOCAL IP
        const data = {
            name: name,
            email: email,
            password: password,
        }

        // register user in db
        return axios.post(url, data);
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