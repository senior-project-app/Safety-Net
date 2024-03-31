import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import ButtonComponent from '../components/Button';
import axios from 'axios';

const colorDarkPurple = '#23027D'; //
const colorLightPurple = '#D8CCFF'; //


function Register() {
    const [ name,  setName ] = useState("");
    const [ email,  setEmail ] = useState("");
    const [ password,  setPassword ] = useState("");
    const [ confirm,  setConfirm ] = useState("");

    async function register() {
        axios({
            method: 'post',
            url: '/register',
            data: {
                name: fullName,
                email: email,
                password: password
            }
        })
            .then(() => {
                // TODO: redirect to dashboard
            })
            .catch(() => {
                // TODO: error message banner, redo
            })
    }

    return (
        <View style={styles.centered}>
            <Text style={styles.title}>Create Account</Text>
            <Input setText={ setName } placeholder="Enter name"  />
            <Input setText={ setEmail } placeholder="Enter email"/>
            <Input setText={ setPassword } placeholder="Enter password"/>
            <Input setText={ setConfirm } placeholder="Confirm password"/>

            <ButtonComponent onPress={ register } />
        </View>
    );
}


const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorLightPurple,
        width: "100%"
    },
    title: {
        fontSize: 20,
        marginVertical: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
        color: colorDarkPurple,
    },
});

export default Register;