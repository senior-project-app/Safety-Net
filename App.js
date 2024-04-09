import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import UnauthenticatedUser from "./frontend/Navigation/UnauthenticatedUser";
import AuthenticatedParent from "./frontend/Navigation/ParentDashboard";
import AuthenticatedChild from "./frontend/Navigation/AuthenticatedChild";
import {supabase} from "./backend/database";

export default function App() {
    const [session, setSession] = useState(null);
    const [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    // listens to the authorization session and updates it
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        });
    }, []);

    if (!fontsLoaded) return null; // needs to stay here, otherwise something breaks

    function returnView() {
        if(session===null) return <UnauthenticatedUser/>

        if(session.user.user_metadata.role==="parent") return <AuthenticatedParent/>
        else if(session.user.user_metadata.role==="child") return <AuthenticatedChild/>

        else return <UnauthenticatedUser/>
    }

    return (
        <NavigationContainer>
            {returnView()}
        </NavigationContainer>
    );
}

