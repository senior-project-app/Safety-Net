import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from '../Components/Styles';

function CustomInput({ setText, value, placeholder, secure }) {
    const [placeholderLocal, setPlaceholder] = useState(placeholder);
    const [secureLocal, setSecureLocal] = useState(secure);
    // TODO: onEndEditing

    return (
        <TextInput
            onChangeText={ (text) => setText(text) }
            onFocus={ () => {
                setPlaceholder("");

                if(placeholder==="Password" || placeholder==="Confirm Password") setSecureLocal(true);
            }}
            onBlur={ () => {
                setPlaceholder(placeholder);
                if(value==="") setSecureLocal(false);
            }}
            placeholder={ placeholderLocal }
            secureTextEntry={secureLocal}
            value={value}
            //defaultValue="" browser doesnt like this
            style={styles.purpleInput}
        />
    );
}

export default CustomInput;