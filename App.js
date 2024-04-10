import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {createContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import UnauthenticatedUser from "./frontend/Navigation/UnauthenticatedUser";
import AuthenticatedParent from "./frontend/Navigation/AuthenticatedParent";
import AuthenticatedChild from "./frontend/Navigation/AuthenticatedChild";
import {SessionContext} from "./backend/Context";
import {supabase} from "./backend/database";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
    const [session, setSession] = useState(null);
    const [metadata, setMetadata] = useState(null)

    const [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    useEffect(() => {
        async function loadMetadata() {
            const {data, error} = await supabase.from("parent_users").select();
            setMetadata(data);
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            loadMetadata();
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            loadMetadata();
        })

        return () => authListener.subscription;
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
            <SessionContext.Provider value={{session: session, metadata: metadata, setSession: setSession }}>
                {returnView()}
            </SessionContext.Provider>
        </NavigationContainer>
    );
}


