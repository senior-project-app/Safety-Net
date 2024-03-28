import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import ChildDashboardPage from './ChildDashboard';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#000000'; //

const ChildInfoPage = () => {
    const [name, setName] = useState("");

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
            }}>Please enter your name to continue.</Text>
            <CustomInput placeholder={"Enter your name"} setText={setName} value={name}/>
            <CustomButton myText={"Confirm"} onPress={goToChildDashboard}></CustomButton>
        </View>
    );

    function goToChildDashboard(){
        return (
            <View>
              <ChildDashboardPage/>
            </View>
        );
    }
}

export default ChildInfoPage;