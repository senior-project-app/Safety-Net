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

const ChildDashboardPage = () => {
    
    return (
        <View style={{
            backgroundColor: colorLightPurple,
        }}>
            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Tap the button below to check in with your loved one.</Text>

            <CustomCircleButton myText = {"TAP"} onPress={ResetTimer}></CustomCircleButton>

            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Check back in at </Text>


            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>

        </View>
    );

    function ResetTimer(){

    }

}

export default ChildDashboardPage;