import React, {useContext, useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import CircleButton from '../../Components/CircleButton';
import styles from "../../Components/Styles";
import {fetchChildInfo, getChildMetadata, getUserMetadata, supabase} from "../../../backend/database";
import {SessionContext} from "../../../backend/Context";

const ChildDashboard = () => {
    const session = useContext(SessionContext);
    const [ metadata, setMetadata ] = useState({ check_in_interval: "00:00"});

    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    useEffect(() => {
        fetchChildInfo(session.session.user.id);

        setInterval(() => {
            getChildMetadata().then()
                .then((res) => {
                    setMetadata(res);
                });
        }, 1000);
    }, []);

    async function updateLatestCheckIn(date, id) {
        await supabase
            .from('child_users')
            .update({ last_check_in: date.toISOString() })
            .eq('id', id);
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Tap the button below to check in with your loved one.</Text>
            <CircleButton text={"Check-In"} onPress={ () => updateLatestCheckIn(new Date(), metadata.id) }/>

            <Text>{"\n\n"}</Text>
            <Text style={styles.centeredText}>Your check-in interval:</Text>
            <Text style={styles.centeredText}>Every {metadata.check_in_interval}</Text>

        </View>
    );

}

export default ChildDashboard;