import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#FFFFFF'; //

const StartPage = () => {
    const [pairingCode, setPairingCode] = useState("");
    return (
        <View style={styles.container}>

            <View style={styles.child}>
                <Text style={styles.text}>Sign In</Text>
                <CustomInput placeholder={"Email"} setText={setPairingCode} value={pairingCode}/>
                <CustomInput placeholder={"Password"} setText={setPairingCode} value={pairingCode}/>
                <CustomButton myText={"Sign In"}></CustomButton>
            </View>

            <View>
                <Text>or</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Pair to an account</Text>
                <CustomInput placeholder={"Enter pairing code"} setText={setPairingCode} value={pairingCode}/>
                <CustomButton myText={"Pair"}></CustomButton>
            </View>

            <Text>Don't have an account? <Text style={styles.registerButton}>Register</Text></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly", // for spacing on the vertical
        alignItems: "center",
        marginTop: '25%', // forces content to be closer to the center by reducing amount of space for "space-evenly"
        marginBottom: '25%', // forces conent to be closer to the center
        backgroundColor: colorLightPurple,
    },
    child: {
        width: "75%" // makes children be the same width
    },
    registerButton: {
        fontFamily: 'Cochin',
        fontWeight: 'regular',
        color: "blue",
    },
    text: {
        alignSelf: "flex-start",
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'regular',
        color: colorDarkPurple,
    },
});


export default StartPage;