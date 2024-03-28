import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import ButtonComponent from '../components/Button';
import axios from 'axios';

const colorDarkPurple = '#23027D'; //
const colorLightPurple = '#D8CCFF'; //

const RegisterPage = () => {
    async function register() {
        // TODO: implement axios call to the backend to register new user
    }

    return (
        <View style={styles.centered}>
            <Text style={styles.title}>Create Account</Text>
            <Input id="name" placeholder={"Enter name"}/>
            <Input id= "email" placeholder={"Enter email"}/>
            <Input id= "password" placeholder={"Enter password"}/>
            <Input id= "confirmPassword" placeholder={"Confirm password"}/>

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

export default RegisterPage;