import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from '../Components/Styles';

function CustomInput({ setText, value, placeholder, type }) {
    const [placeholderLocal, setPlaceholder] = useState(placeholder);

    return (
        <TextInput
            onChangeText={ (text) => setText(text) }
            onFocus={ () => setPlaceholder("") }
            onBlur={ () => setPlaceholder(placeholder) }
            placeholder={ placeholderLocal }
            secureTextEntry={type==="password"}
            value={value}
            //defaultValue="" browser doesnt like this
            style={styles.purpleInput}
        />
    );
}

export default CustomInput;