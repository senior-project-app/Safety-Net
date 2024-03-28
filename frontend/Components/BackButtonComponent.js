import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const colorDarkPurple = '#23027D'; // button bg color
const colorRoyalPurple = '#6E19FF'; // button border color
const colorWhite = '#FFFFFF'; // button text color
const colorLightPurple = '#D8CCFF'; //


const CustomBackButton = (props) => {
    const [wasPressed, setPressed] = useState(false); // state

    return (
        <View style={styles.purpleButton}>
            <Pressable
                onPress={() => {
                    setPressed(!wasPressed);
                    props.onPress();
                }}>
                <Text style={styles.purpleButton}>{"<"}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    purpleButton: {
        textAlign: 'center',
        maxWidth: "15%",
        padding: 0,
        margin: 10,
        borderWidth: 2,
        borderRadius: 9,
        fontSize: 30,
        color: colorDarkPurple,
        borderColor: colorDarkPurple,
        backgroundColor: colorLightPurple,
    },
});


export default CustomBackButton;