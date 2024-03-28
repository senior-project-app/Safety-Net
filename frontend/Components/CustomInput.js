import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = (props) => {
    const [text, setText] = useState('');
    const [placeholder, setPlaceholder] = useState(props.placeholder);

    return (
        <TextInput
            style={style.purpleInput}
            defaultValue=""
            placeholder={placeholder}
            value={text}
            onChangeText={(input) => setText(input)}
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder(props.placeholder)}
        />
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