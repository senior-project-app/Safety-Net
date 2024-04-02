import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from "../Components/Styles";
import TimeSelector from "../Components/TimeSelector";

const ParentDashboardPage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>DemoChildUser</Text>
                <TimeSelector text={"Set Checkin Interval"}/>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Set Suspend Interval</Text>
                <TimeSelector text={"Begin"}/>
                <TimeSelector text={"End"}/>
            </View>
        </View>
    );
}

export default ParentDashboardPage;