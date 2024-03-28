// <CustomButton notPressed={"Press me 1!"} pressed={"I have been pressed!"} onPress={customActionOne}></CustomButton>

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const colorDarkPurple = '#23027D'; // button bg color
const colorRoyalPurple = '#6E19FF'; // button border color
const colorWhite = '#FFFFFF'; // button text color


const CustomButton = (props) => {
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
        padding: 10,
        margin: 10,
        borderRadius: 9,
        fontSize: 16,
        color: colorWhite,
        borderColor: colorDarkPurple,
        backgroundColor: colorRoyalPurple,
    },
});


export default CustomButton;