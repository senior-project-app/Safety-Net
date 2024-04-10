import React, {useContext, useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import styles from "../../Components/Styles";
import {supabase} from "../../../backend/database";
import {SessionContext} from "../../../backend/Context";

const ParentDashboardPage = ({ navigation }) => {
    const { session, metadata } = useContext(SessionContext);
    const [ children, setChildren ] = useState(null);

    // get all children assigned to a user
    async function getChildren() {
        const {data, error} = await supabase.rpc('get_child_users', {invite_code_text: metadata[0].invite_code});
        if(error) console.log(error);
        else setChildren(data);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getChildren();
        }, 10000);

        return () => clearInterval(interval);
    }, []);



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>



        </View>
    );
}

export default ParentDashboardPage;