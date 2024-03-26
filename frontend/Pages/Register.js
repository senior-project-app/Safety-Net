import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import ButtonComponent from '../Components/ButtonComponent';
import Supervisor from '../../backend/Supervisor';


const colorDarkPurple = '#23027D'; //
const colorLightPurple = '#D8CCFF'; //

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
   
    function onPress() {


        console.log(email);
        console.log(password);
        console.log(confirm);
    }

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
            <ButtonComponent onPress={ onPress } />
        </View>
    );

}

export default RegisterPage;