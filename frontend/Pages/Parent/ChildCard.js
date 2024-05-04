import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { TimerPickerModal } from "react-native-timer-picker";
import { supabase } from "../../../backend/database";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: 'seconds',
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }
});

const ChildCard = ({ user, index }) => {
    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState("");
    const [expectedCheckIn, setExpectedCheckIn] = useState(null);
    const [alertShown, setAlertShown] = useState(false);

    useEffect(() => {            // Calculate expected checkin time
        if (user.linterval !== null) {
            const [hours, minutes, seconds] = user.linterval.split(":");
            const lastCheckIn = dayjs(user.last_checkin).utc(true);
            const expected = lastCheckIn.add(hours, 'hours').add(minutes, 'minutes').add(seconds, 'seconds');
            setExpectedCheckIn(expected);
        }
    }, [user, user.linterval]);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    async function updateChildInterval(hours, minutes, seconds) {
        const { error } = await supabase.rpc('update_interval', {
            uid: user.tid,
            new_interval: `${hours}:${minutes}:${seconds}`
        });
        if (error) return console.log(error);
    }

    function prettify_time(time_str) {
        if (user.linterval === null) return "Interval not set";
        const start = dayjs(user.last_checkin).utc(true);
        return `${start.fromNow(true)} ago`;
    }

    function checkForViolation() {
        if (user.linterval === null) return false;
    
        const [hours, minutes, seconds] = user.linterval.split(":");
        const lastCheckIn = dayjs(user.last_checkin).utc(true);
        const expectedCheckIn = lastCheckIn.add(hours, 'hours').add(minutes, 'minutes').add(seconds, 'seconds');
    
        if (dayjs().isAfter(expectedCheckIn)) {
            if (!alertShown) {
                Alert.alert("Attention", `${user.tname} has not checked in within the expected interval.`);
                setAlertShown(true);
            }
            return "red"; 
        } else {
            return "black";
        }
    }
    
    return (
        <View style={{ width: "75%" }}>
            <Pressable onPress={toggleOverlay}>
                <ListItem topDivider bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title >{user.tname}</ListItem.Title>
                        <ListItem.Subtitle style={{ color: checkForViolation() }}>Last check-in: {prettify_time(user.linterval)} </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </Pressable>
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <TimerPickerModal       // Timer system
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
