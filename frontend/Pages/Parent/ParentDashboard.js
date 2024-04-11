import React, {useCallback, useContext, useEffect, useState} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";
import Button from "../../Components/Button";
import {fetchUserInfo, getUserMetadata} from "../../../backend/database";

const ParentDashboardPage = ({ navigation }) => {
    const { session, metadata } = useContext(SessionContext);
    const [ children, setChildren ] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    // get all children assigned to a user
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            fetchUserInfo();
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <Button onPress={() => getUserMetadata()} text={"Print children"}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ParentDashboardPage;