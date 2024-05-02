import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Pressable, RefreshControl, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from "../../Components/Styles";
import Button from "../../Components/Button";
import { supabase } from "../../../backend/database";
import ChildCard from "./ChildCard";
import {SessionContext} from "../../../backend/Context";

const ParentDashboardPage = ({ navigation }) => {
    const [ loading, setLoading ] = useState(true);
    const { session, setSession } = useContext(SessionContext);
    const [ children, setChildren ] = useState([]);

    const getChildren = async () => {
        const {data, error} = await supabase.rpc('get_supervised', {invite_code: session.user.user_metadata.code });
        if(error) return console.log(error);
        setChildren(data);

        setLoading(false);
    }


    useEffect(() => {
        getChildren();
    }, []);

    if(loading) return (
        <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    );
    else return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>
            {
                children.map((user, index) => (
                    <ChildCard user={user} key={index} />
                ))
            }
            <Button text={"Refresh"} onPress={() => getChildren()}/>
        </View>
    );
}

export default ParentDashboardPage;