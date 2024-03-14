import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const CustomInput = (props) => {
    const [text, setText] = useState("");

    return (
        <View>
            <TextInput style={props.style} defaultValue={props.placeholder} clearTextOnFocus={text.length==0 ? true : false} onChangeText={ (text) => { setText(text) } }/>
        </View>
    );
};



export default CustomInput;