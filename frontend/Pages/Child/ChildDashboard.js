import React, {useContext, useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import CircleButton from '../../Components/CircleButton';
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";
import {supabase} from "../../../backend/database";

const ChildDashboard = () => {
    const { session, setSession } = useContext(SessionContext);

    async function updateLatestCheckIn() {
        const {  error } = await supabase.rpc('checkin', { uid: session.user.id });
        if(error) Alert.alert(error.message);
    }

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.centeredHeadline}>Press the button below to check-in.</Text>
            <CircleButton text={"Check-In"} onPress={ () => updateLatestCheckIn() }/>

            <Text>{"\n\n"}</Text>
            <Text style={styles.centeredText}>Your check-in interval:</Text>
            <Text style={styles.centeredText}>Every {session.user.user_metadata.interval} hours</Text>

        </View>
    );
}

export default ChildDashboard;