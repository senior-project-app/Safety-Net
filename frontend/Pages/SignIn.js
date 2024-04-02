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

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <CustomInput id="email" placeholder={"Enter email"} setText={setEmail} value={email}/>
            <CustomInput id="password" placeholder={"Enter password"} setText={setPassword} value={password}/>
            <CustomButton myText={"Sign in"} onPress={() => navigation.navigate('ParentDashboard')}></CustomButton>
        </View>
    );
}

export default SignInPage;