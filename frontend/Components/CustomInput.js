import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function CustomInput({text, setText, placeholder }) {
    return (
        <TextInput
            style={style.purpleInput}
            defaultValue=""
            placeholder={placeholder}
            value={text}
            onChangeText={(input) => setText(input)}
            onFocus={(e) =>
            { console.log(e.currentTarget.memoizedProps) }}
        />
    );
};

const style = StyleSheet.create({
    purpleInput: {
        textAlign: 'center',
        maxWidth: "100%",
        width: 250,
        borderWidth: 2,
        borderRadius: 9,
        padding: 10,
        margin: 10,
        fontSize: 16,
        color: '#23027D',
        borderColor: '#23027D',
        backgroundColor: '#FFFFFF',
    },
  });

export default CustomInput;