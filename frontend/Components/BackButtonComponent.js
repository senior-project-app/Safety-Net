// <CustomBackButton onPress={customActionOne}></CustomBackButton>

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const colorDarkPurple = '#23027D'; // button bg color
const colorRoyalPurple = '#6E19FF'; // button border color
const colorLightPurple = '#D8CCFF'; // button text color
const colorWhite = '#FFFFFF'; // button text color


const CustomBackButton = (props) => {
    const [wasPressed, setPressed] = useState(false); // state

    return (
        <View style={styles.backbutton}>
            <Pressable
                onPress={() => {
                    setPressed(!wasPressed);
                    props.onPress();
                }}>
                <Text style={styles.backButton}>{'<'}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    backButton: {
        width: 40,
        padding: 8,
        margin: 10,
        borderRadius: 9,
        fontSize: 24,
        color: colorDarkPurple,
        borderColor: colorLightPurple,
        backgroundColor: colorLightPurple,
    },
});


export { CustomBackButton };