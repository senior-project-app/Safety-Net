import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import TimeSelector from "../../Components/TimeSelector";
import styles from "../../Components/Styles";
import {supabase} from "../../../backend/database";

const ParentDashboardPage = () => {
    const [session, setSession] = React.useState(null);

    // listens to the authorization session and updates it
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        });
    }, []);

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