import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Button from "../../Components/Button";
import {ListItem, Overlay} from "react-native-elements";
import TimeSelector from "../../Components/TimeSelector";

const ChildCard = ({ user, index }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    /* TODO:
    *  - update check in interval with selected time
    *  - notifications when user does not checkin within timeframe
    *  - when child checks in update last check in value
    */


    return (
        <View>
            <Pressable onPress={toggleOverlay}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>Last check-in: {new Date(user.last_check_in).toLocaleString()}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </Pressable>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.container}>
                    <View style={{ padding: 20 }}>
                        <Text style={styles.text}>{user.name}</Text>
                        <TimeSelector text={"Set maximum time between check-ins"}/>
                    </View>
                    <Button text={"Confirm Changes"}/>
                </View>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
});

export default ChildCard;