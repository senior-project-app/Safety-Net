import {useState} from "react";
import {Text, View} from "react-native";
import Button from "./Button";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";

const TimeSelector = ({text}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState("");

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
            <Button text={text} onPress={showTimeSelect}/>
            <Text>selected: {time}</Text>
        </View>
    )

}

export default TimeSelector;