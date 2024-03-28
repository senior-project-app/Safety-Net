import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const CustomBoxWithText = (props) => {

    return (
        <View>
            <Text style={style.purpleInput}>{props.myText}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    purpleInput: {
        textAlign: 'center',
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

export default CustomBoxWithText;