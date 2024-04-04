import React from 'react';
import { Text, View } from 'react-native';
import TimeSelector from "../../Components/TimeSelector";
import styles from "../../Components/Styles";

const ParentDashboardPage = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>DemoChildUser</Text>
                <TimeSelector text={"Set Check-In Interval Start"}/>
                <TimeSelector text={"Set Check-In Interval End"}/>
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