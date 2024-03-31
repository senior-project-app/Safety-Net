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

const StartPage = () => {
    const [pairingCode, setPairingCode] = useState("");

    return (
        <View style={} >
            <Text>Please sign in or create an account to continue.</Text>
            <CustomButton myText={"Sign In"}></CustomButton>
            <CustomButton myText={"Create Account"}></CustomButton>
            <Text>To pair your device with an existing account, please enter the code below.</Text>
            <CustomInput placeholder={"Enter pairing code"} setText={setPairingCode} value={pairingCode}/>
            <CustomButton myText={"Confirm"}></CustomButton>
        </View>
    );


}

export default StartPage;