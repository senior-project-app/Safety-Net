import React, { useState } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
import CustomCircleButton from '../Components/CircleButtonComponent';
import CustomBoxWithText from '../Components/CustomBoxWithTextComponent';
import styles from "../Components/Styles";

const ChildDashboardPage = () => {
    const[animatePress, setAnimatePress] = useState(new Animated.Value(1));
    
    function resetTimer(){
        // animate the button here
        Animated.timing(animatePress, {
            toValue: 0.8,
            duration:200,
            useNativeDriver: true
        }).start()


        // Reset timer here

    }

    function resetButton(){
        // animate the button here
        Animated.timing(animatePress, {
            toValue: 1.0,
            duration:200,
            useNativeDriver: true
        }).start()

    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Tap the button below to check in with your loved one.</Text>

            <Animated.View style = {{transform:[{scale: animatePress}]}}
            ><CustomCircleButton myText = {"TAP"} onPressIn={() => resetTimer()} onPressOut={() => resetButton()}></CustomCircleButton></Animated.View>
            <Text style={styles.centeredText}></Text><Text style={styles.centeredText}></Text>
            <Text style={styles.centeredText}>Check back in at </Text>

            <CustomBoxWithText myText = {"Time"}></CustomBoxWithText>

        </View>
    );

}

export default ChildDashboardPage;