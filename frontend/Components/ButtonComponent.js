import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '../Components/Styles';


const CustomButton = ({ onPress, myText }) => {
    return (
        <Pressable onPress={ () => onPress() }>
            <Text style={styles.purpleButton}>{ myText }</Text>
        </Pressable>
    );
};

export default CustomButton;