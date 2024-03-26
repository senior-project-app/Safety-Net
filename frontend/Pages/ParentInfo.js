import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import CustomBackButton from '../Components/BackButtonComponent';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#000000'; //

const ParentInfoPage = () => {

    const [timeCounter, interactionTimeCount] = useState("");
    const [suspendFrom, suspendFromTime] = useState("");
    const [suspendTil, suspendTilTime] = useState("");
    
    return (
        <View style={{
            backgroundColor: colorLightPurple,
        }}>
            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Please verify your email to sign in.</Text>

            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Use the access code sent in the email to pair other devices to your account. They will appear in your dashboard once successfully signed in.</Text>

            <CustomButton myText={"Sign in"} onPress={goToParentDashboard}></CustomButton>

        </View>
    );

    function goToParentDashboard(){
        return (
            <View>
              <ParentDashboardPage/>
            </View>
        );
    }

}

export default ParentInfoPage;