import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import CustomBackButton from '../Components/BackButtonComponent';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';

const ParentDashboardPage = ({ navigation }) => {
    const [timeCounter, interactionTimeCount] = useState("");
    const [suspendFrom, suspendFromTime] = useState("");
    const [suspendTil, suspendTilTime] = useState("");
    
    return (
        <View>
            <Text>NAME</Text>
            <Text>checked in at</Text>

            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>
            <Text>Set timer for interaction: </Text>
            <CustomInput placeholder = {"New time" } setText={interactionTimeCount} value={timeCounter}></CustomInput>
            <Text>Suspend timer: </Text>

            <Text>From</Text>

            <CustomInput placeholder = {"New Time"} setText={suspendFromTime} value={suspendFrom}></CustomInput>

            <Text>To</Text>

            <CustomInput placeholder = {"New Time"} setText={suspendTilTime} value={suspendTil}></CustomInput>

        </View>
    );


}

export default ParentDashboardPage;