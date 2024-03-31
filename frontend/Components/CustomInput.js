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
        borderWidth: 2,
        borderRadius: 9,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#23027D',
        borderColor: '#23027D',
        backgroundColor: '#FFFFFF',
    },
  });

export default CustomInput;