import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ListItem} from "react-native-elements";
import {LinearGradient} from "expo-linear-gradient";
import {TimerPickerModal} from "react-native-timer-picker";
import {supabase} from "../../../backend/database";

const ChildCard = ({ user, index }) => {
    const [visible, setVisible] = useState(false);
    const [ timerSelect, setTimerSelect ] = useState(false);
    const [ time, setTime ] = useState("");

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    async function updateChildInterval(duration) {
        await supabase
            .from('child_users')
            .update({ check_in_interval: `${duration.hours}:${duration.minutes}:00` })
            .eq('id', user.id);
    }


    /* TODO:
    *  - update check in interval with selected time - done
    *  - notifications when user does not checkin within timeframe
    *  - when child checks in update last check in value - done
    */

    return (
        <View style={{ width: "75%" }}>
            <Pressable onPress={toggleOverlay}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>Last check-in: {new Date(user.last_check_in).toLocaleString()}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </Pressable>
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <TimerPickerModal
                        padWithNItems={2}
                        hourLabel="hr :"
                        minuteLabel=" min"
                        hideSeconds
                        LinearGradient={LinearGradient}
                        onConfirm={(duration) => {
                            setTime(duration);
                            setVisible(false);
                            updateChildInterval(duration);
                        }}
                        setIsVisible={setVisible}
                        visible={visible}
                        styles={{
                            theme: "light",
                            pickerItem: {
                                fontSize: 34,
                            },
                            pickerLabel: {
                                fontSize: 26,
                                right: -20,
                            },
                            pickerLabelContainer: {
                                width: 60,
                            },
                            pickerItemContainer: {
                                width: 150,
                            },
                        }}
                    />
                </View>
            </View>
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