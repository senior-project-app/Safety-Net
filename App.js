import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {createContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import UnauthenticatedUser from "./frontend/Navigation/UnauthenticatedUser";
import AuthenticatedParent from "./frontend/Navigation/AuthenticatedParent";
import AuthenticatedChild from "./frontend/Navigation/AuthenticatedChild";
import {SessionContext} from "./backend/Context";
import {fetchUserInfo, storeUserMetadata, supabase} from "./backend/database";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
    const [session, setSession] = useState(null);

    const [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            fetchUserInfo();
        });
    }, []);

    if (!fontsLoaded) return null; // needs to stay here, otherwise something breaks
    function returnView() {
        if (session === null) return <UnauthenticatedUser/>

        if (session.user.user_metadata.role === "parent") return <AuthenticatedParent/>
        else if (session.user.user_metadata.role === "child") return <AuthenticatedChild/>
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


