import React, { useState } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/ButtonComponent';
import CustomBackButton from '../Components/BackButtonComponent';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';
import styles from "../Components/Styles";

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; // 
const colorLightPurple = '#D8CCFF'; //
const colorWhite = '#FFFFFF'; // 
const colorGray = '#707070'; // 
const colorBlack = '#000000'; //

const ChildDashboardPage = () => {
    state = {
        animatePress: new Animated.Value(1),
    }

   function resetTimer(){
        // animate the button here
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration:200,
            useNativeDriver: true
        }).start()


        // Reset timer here
    
    }

    function resetButton(){
        // animate the button here
        Animated.timing(this.state.animatePress, {
            toValue: 1.0,
            duration:200,
            useNativeDriver: true
        }).start()
    
    }
    
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Tap the button below to check in with your loved one.</Text>

            <Animated.View style = {{transform:[{scale: this.state.animatePress}]}}
            ><CustomCircleButton myText = {"TAP"} onPressIn={() => resetTimer()} onPressOut={() => resetButton()}></CustomCircleButton></Animated.View>
            <Text style={styles.centeredText}></Text><Text style={styles.centeredText}></Text>
            <Text style={styles.centeredText}>Check back in at </Text>

            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>

        </View>
    );

}

export default ChildDashboardPage;