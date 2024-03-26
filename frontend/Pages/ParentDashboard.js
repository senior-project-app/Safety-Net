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

const ParentDashboardPage = () => {

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
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>NAME</Text>
            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>checked in at</Text>

            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>

            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Set timer for interaction: </Text>

            <CustomInput placeholder = {"New time" } setText={interactionTimeCount} value={timeCounter}></CustomInput>


            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>Suspend timer: </Text>

            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>From</Text>

            <CustomInput placeholder = {"New Time"} setText={suspendFromTime} value={suspendFrom}></CustomInput>

            <Text style={{
                fontFamily: 'Cochin',
                fontSize: 24,
                fontWeight: 'regular',
                textAlign: 'center',
                paddingBottom: 10,
                color: colorBlack,
            }}>To</Text>

            <CustomInput placeholder = {"New Time"} setText={suspendTilTime} value={suspendTil}></CustomInput>

        </View>
    );


}

export default ParentDashboardPage;