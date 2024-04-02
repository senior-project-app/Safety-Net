import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import CustomBackButton from '../Components/BackButtonComponent';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';
import styles from "../Components/Styles";

const ParentDashboardPage = ({ navigation }) => {
    const [timeCounter, interactionTimeCount] = useState("");
    const [suspendFrom, suspendFromTime] = useState("");
    const [suspendTil, suspendTilTime] = useState("");
    
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>NAME checked in at</Text>
            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>
            <Text style={styles.centeredText}></Text><Text style={styles.centeredText}></Text>
            <Text style={styles.centeredHeadline}>Set timer for interaction: </Text>
            <CustomInput placeholder = {"New time" } setText={interactionTimeCount} value={timeCounter}></CustomInput>
            <Text style={styles.centeredText}></Text><Text style={styles.centeredText}></Text>
            <Text style={styles.centeredHeadline}>Suspend timer: </Text>
            <Text style={styles.centeredText}>From</Text>
            <CustomInput placeholder = {"New Time"} setText={suspendFromTime} value={suspendFrom}></CustomInput>
            <Text style={styles.centeredText}>To</Text>
            <CustomInput placeholder = {"New Time"} setText={suspendTilTime} value={suspendTil}></CustomInput>

        </View>
    );


}

export default ParentDashboardPage;