import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = (props) => {

    return (
        <View>
            <TextInput style={style.purpleInput} defaultValue={props.placeholder} clearTextOnFocus={props.value.length==0 ? true : false} onChangeText={ (text) => { props.setText(text) } }/>
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

export default CustomInput;