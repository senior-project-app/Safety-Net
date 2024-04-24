import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {createContext, useEffect, useRef, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import UnauthenticatedUser from "./frontend/Navigation/UnauthenticatedUser";
import AuthenticatedParent from "./frontend/Navigation/AuthenticatedParent";
import AuthenticatedChild from "./frontend/Navigation/AuthenticatedChild";
import {SessionContext} from "./backend/Context";
import { supabase } from "./backend/database";
import {Button, LogBox, Platform, View} from 'react-native';
import {BackgroundService} from "./backend/BackgroundService";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});



export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const [session, setSession] = useState(null);
    const [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    let backgroundService = BackgroundService.prototype;
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        // listen to auth changes
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);

            if (event === 'INITIAL_SESSION') {
                // handle initial session
            } else if (event === 'SIGNED_IN') {
                backgroundService = new BackgroundService(session);
                backgroundService.registerBackgroundFetchAsync();
            } else if (event === 'SIGNED_OUT') {
                backgroundService.unregisterBackgroundFetchAsync();
            }
        });

        return () => {
            data.subscription.unsubscribe();
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        }
    }, []);

    if (!fontsLoaded) return null; // needs to stay here, otherwise something breaks
    function returnView() {
        if (session === null) return <UnauthenticatedUser/>

        if (session.user.user_metadata.role === "supervisor") return <AuthenticatedParent/>
        else if (session.user.user_metadata.role === "supervised") return <AuthenticatedChild/>
        else return <UnauthenticatedUser/>
    }

    return (
        <NavigationContainer>
             <SessionContext.Provider value={{session: session, setSession: setSession }}>
                 {returnView()}
             </SessionContext.Provider>
         </NavigationContainer>
    );
}


async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        token = (await Notifications.getExpoPushTokenAsync({ projectId: '96c279a5-a13d-4ccf-9373-5a64b5ec8191' })).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

