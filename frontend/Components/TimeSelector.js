import {useState} from "react";
import {Text, View} from "react-native";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import {TimerPicker, TimerPickerModal} from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`

const TimeSelector = ({text}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [alarmString, setAlarmString] = useState(null);
    function onChange(event, selectedDate) {
        setDate(selectedDate);
        setTime(selectedDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }

    function showTimeSelect() {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'time',
            is24Hour: false,
        });
    }

    return (
        <View>
            <TimerPickerModal
                padWithNItems={2}
                hourLabel="hr :"
                minuteLabel=""
                hideSeconds
                LinearGradient={LinearGradient}
                onConfirm={true}
                setIsVisible={() => console.log() }
                visible={true}
            />
            <Text>selected: {time}</Text>
        </View>
    )

}

export default TimeSelector;