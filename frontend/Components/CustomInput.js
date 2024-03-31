import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { styles } from "../../App";

function CustomInput({text, setText, placeholder }) {
    return (
        <TextInput
            style={styles.purpleInput}
            defaultValue=""
            placeholder={placeholder}
            value={text}
            onChangeText={(input) => setText(input)}
            onFocus={(e) =>
            { console.log(e.currentTarget.memoizedProps) }}
        />
    );
}

export default CustomInput;