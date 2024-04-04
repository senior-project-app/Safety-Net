import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from '../Components/Styles';

function Input({ setValue, value, placeholder, secure }) {
    return (
        <TextInput
            onChangeText={(text) => setValue(text) }
            placeholder={placeholder}
            secureTextEntry={secure}
            value={value}
            style={styles.purpleInput}
        />
    );
}

export default Input;