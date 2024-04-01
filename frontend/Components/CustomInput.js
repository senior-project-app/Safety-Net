import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from '../Components/Styles';

function CustomInput({ setText, value, placeholder }) {
    const [placeholderLocal, setPlaceholder] = useState(placeholder);

    return (
        <TextInput
            onChangeText={ (text) => setText(text) }
            onFocus={ () => setPlaceholder("") }
            onBlur={ () => setPlaceholder(placeholder) }
            placeholder={ placeholderLocal }
            value={value}
            defaultValue=""
            style={styles.purpleInput}
        />
    );
}

export default CustomInput;