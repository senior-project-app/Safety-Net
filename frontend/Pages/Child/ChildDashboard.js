import React from 'react';
import { Text, View } from 'react-native';
import CircleButton from '../../Components/CircleButton';

import styles from "../../Components/Styles";

const ChildDashboard = () => {
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Tap the button below to check in with your loved one.</Text>
            <CircleButton text = {"Check-In"}/>

            <Text>{"\n\n"}</Text>
            <Text style={styles.centeredText}>Check back in at </Text>

            <Text style={styles.text}>time_placeholder</Text>

        </View>
    );

}

export default ChildDashboard;