import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import ButtonComponent from '../Components/ButtonComponent';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#FFFFFF'; //

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <View style={{
            backgroundColor: colorLightPurple,
        }}>
            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorDarkPurple
            }}>Create Account</Text>
            <CustomInput placeholder={"Enter email"} setText={setEmail} value={email}/>
            <CustomInput placeholder={"Enter password"} setText={setPassword} value={password}/>
            <CustomInput placeholder={"Confirm password"} setText={setConfirm} value={confirm}/>
            <ButtonComponent/>
        </View>
    );

}

export default RegisterPage;