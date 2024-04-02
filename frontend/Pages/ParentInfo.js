import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import styles from "../Components/Styles";
import CustomBackButton from '../Components/BackButtonComponent';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#000000'; //

const ParentInfoPage = ({ navigation }) => {

    //const [timeCounter, interactionTimeCount] = useState("");
    //const [suspendFrom, suspendFromTime] = useState("");
    //const [suspendTil, suspendTilTime] = useState("");
    
    return (
        <View style={styles.centeredContainer}>
          <View style={styles.child}>
            <Text style={styles.centeredHeadline}>Please verify your email to sign in.</Text>
            <Text style={styles.centeredText}>Use the access code sent in the email to pair other devices to your account.</Text>
            <Text style={styles.centeredText}>They will appear in your dashboard once successfully signed in.</Text>
            <CustomButton myText={"Sign in"} onPress={() => navigation.navigate('RegisterSignIn')}></CustomButton>
        </View>
        </View>
    );

}

export default ParentInfoPage;