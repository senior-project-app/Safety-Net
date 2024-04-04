import React, {useState} from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../Components/Styles';


const Button = ({ onPress, text="", style=styles.purpleButton }) => {
    const [pressed, setPressed] = useState(false); // state

    function pressAction(passedAction) {
        setPressed(!pressed);
        passedAction();
    }

    return (
        <Pressable onPress={ () => pressAction(onPress) }>
            <Text style={style}>{ text }</Text>
        </Pressable>
    );
};

export default Button;