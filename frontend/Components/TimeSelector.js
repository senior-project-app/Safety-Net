import {useState} from "react";
import {Button, Text, View} from "react-native";
import CustomButton from "./ButtonComponent";
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";

const TimeSelector = ({text}) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: false,
        });
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <CustomButton myText={text} onPress={showTimepicker}/>
            <Text>selected: {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
        </View>
    )

}

export default TimeSelector;