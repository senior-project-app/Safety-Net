import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Pressable, RefreshControl, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";
import Button from "../../Components/Button";
import {fetchUserInfo, getUserMetadata, supabase} from "../../../backend/database";
import {Card, ListItem} from "react-native-elements";
import ChildCard from "./ChildCard";

const parse = require('postgres-date');

const ParentDashboardPage = ({ navigation }) => {
    const [ metadata, setMetadata ] = useState(null);
    const [ children, setChildren ] = useState([]);

    const getChildren = async () => {
        const {data, error} = await supabase.rpc('get_child_users', {invite_code_text: metadata.invite_code });
        if(error) return console.log(error);
        setChildren(data);
    }

    useEffect(() => {
        getUserMetadata().then()
            .then((res) => {
                setMetadata(res);
                getChildren();
            });

        setInterval(() => {
            getChildren();
        }, 5000);

    }, []);

    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.logo}>SafetyNet</Text>
                {
                    children.map((user, index) => (
                        <ChildCard user={user} key={index} />
                    ))
                }
            <Button text={"Refresh"} onPress={() => getChildren("")}/>
        </View>
    );
}

export default ParentDashboardPage;