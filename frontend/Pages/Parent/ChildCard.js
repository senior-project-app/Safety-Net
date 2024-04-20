import React, { useState } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ListItem} from "react-native-elements";
import {LinearGradient} from "expo-linear-gradient";
import {TimerPickerModal} from "react-native-timer-picker";
import {supabase} from "../../../backend/database";
import parseDate from "postgres-date";

const ChildCard = ({ user, index }) => {
    const [visible, setVisible] = useState(false);
    const [ timerSelect, setTimerSelect ] = useState(false);
    const [ time, setTime ] = useState("");

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    async function updateChildInterval(hours, minutes, seconds) {
        const { error} = await supabase.rpc('update_interval', {
            uid: user.tid,
            new_interval: `${hours}:${minutes}:${seconds}`
        });
        if(error) return console.log(error);
    }

    function prettify_time(time_str) {
        let [ hours, minutes, seconds ] = time_str.split(':');
        seconds = seconds.substring(0, 2);
        return `${hours} hrs ${minutes} min ${seconds} sec`
    }

    return (
        <View style={{ width: "75%" }}>
            <Pressable onPress={toggleOverlay}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{user.tname}</ListItem.Title>
                        <ListItem.Subtitle>Last check-in: { prettify_time(user.difference)  }</ListItem.Subtitle>
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
                            updateChildInterval(duration.hours, duration.minutes, duration.seconds);
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