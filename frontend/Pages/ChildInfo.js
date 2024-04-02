import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import styles from "../Components/Styles";

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#000000'; //

const ChildInfoPage = ({ navigation }) => {
    const [name, setName] = useState("");


    async function validateName() {

        if (name == ""){
            Alert.alert("Code cannot be blank.");
            return;
        }
    
        // TODO: Ensure code is real
        // FOR PAGE TESTING PURPOSES
        navigation.navigate('ChildDashboard');
        // FOR PAGE TESTING PURPOSES
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Please enter your name to continue.</Text>
            <CustomInput placeholder={"Enter your name"} setText={setName} value={name}/>
            <CustomButton myText={"Confirm"} onPress={validateName}></CustomButton>
        </View>
    );

}

export default ChildInfoPage;