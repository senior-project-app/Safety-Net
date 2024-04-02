import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import styles from '../Components/Styles';

const CustomBoxWithText = (props) => {

    return (
        <View>
            <Text style={styles.purpleTextBox}>{props.myText}</Text>
        </View>
    );
};

export default CustomBoxWithText;