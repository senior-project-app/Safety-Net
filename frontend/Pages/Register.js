import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import CustomInput from '../Components/CustomInput';
import ButtonComponent from '../Components/ButtonComponent';
import axios from 'axios';

const colorDarkPurple = '#23027D'; //
const colorLightPurple = '#D8CCFF'; //

const RegisterPage = () => {
    async function register() {
        try {
            const response = await axios.get("/api/data");



        } catch (error) { console.log(JSON.stringify(error)); }
    }

    return (
        <View style={styles.centered}>
            <Text style={styles.title}>Create Account</Text>
            <CustomInput id="name" placeholder={"Enter name"}/>
            <CustomInput id= "email" placeholder={"Enter email"}/>
            <CustomInput id= "password" placeholder={"Enter password"}/>
            <CustomInput id= "confirmPassword" placeholder={"Confirm password"}/>

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