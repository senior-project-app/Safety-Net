import React from 'react';
import {Animated, Pressable, Text, View} from 'react-native';

const CircleButton = ({text=""}) => {
    function animateButton(value) {
        // animate the button here
        Animated.timing(new Animated.Value(1), {
            toValue: value,
            duration:200,
            useNativeDriver: true
        }).start()
    }

    return (
        <Animated.View style = {{ transform: [{ scale: animatePress }] }} >
            <View style={styles.purpleButton}>
                <Pressable onPressIn={() => animateButton(0.8)} onPressOut={() => animateButton(1.0)}>
                    <Text style={styles.purpleButton}>{text}</Text>
                </Pressable>
            </View>
        </Animated.View>
    );
};


export default CircleButton;