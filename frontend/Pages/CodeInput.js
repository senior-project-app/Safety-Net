import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#FFFFFF'; //

const RegisterPage = () => {
    const [pairingCode, setPairingCode] = useState("");

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
            }}>Please sign in or create an account to continue.</Text>
            <CustomButton myText={"Sign In"}></CustomButton>
            <CustomButton myText={"Create Account"}></CustomButton>
            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorDarkPurple
            }}>To pair your device with an existing account, please enter the code below.</Text>
            <CustomInput placeholder={"Enter pairing code"} setText={setPairingCode} value={pairingCode}/>
            <CustomButton myText={"Confirm"}></CustomButton>
        </View>
    );


}

export default RegisterPage;