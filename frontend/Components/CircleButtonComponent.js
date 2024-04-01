// <CustomCircleButton notPressed={"Press me 1!"} pressed={"I have been pressed!"} onPress={customActionOne}></CustomCircleButton>

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const colorDarkPurple = '#23027D'; // button bg color
const colorRoyalPurple = '#6E19FF'; // button border color
const colorWhite = '#FFFFFF'; // button text color


const CustomCircleButton = (props) => {
    const [wasPressed, setPressed] = useState(false); // state

    return (
        <View style={styles.purplebutton}>
            <Pressable
                onPress={() => {
                    setPressed(!wasPressed);
                    props.onPress();
                }}>
                <Text style={styles.purpleButton}>{props.myText}</Text>
                
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    purpleButton: {
        textAlign: 'center',
        maxWidth: "100%",
        padding: 60,
        margin: 10,
        borderRadius: 50,
        fontSize: 16,
        color: colorWhite,
        borderColor: colorDarkPurple,
        backgroundColor: colorRoyalPurple,
    },
});


export default CustomCircleButton;