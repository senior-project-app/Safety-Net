import {Image, View} from 'react-native';
import StartPage from './frontend/Pages/StartPage';
import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './frontend/Components/Styles';
import {useState} from "react";
import ParentDashboard from "./frontend/Pages/ParentDashboard";
import ChildDashboard from "./frontend/Pages/ChildDashboard";
import Register from "./frontend/Pages/Register";
import {AuthenticatedContext} from "./backend/Contexts";


export default function App() {
    const [authenticated, setAuthenticated] = useState(true);
    const [user, setUser] = useState({type: "parent"});

    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    if (!fontsLoaded) return null;

    const Tab = createBottomTabNavigator();


    if(!authenticated) {
        return ( // user is not authenticated, show login/register pages
            <NavigationContainer>
                <AuthenticatedContext.Provider value={{ authenticated: authenticated, setAuthenticated: setAuthenticated }}>
                    <Tab.Navigator screenOptions={{headerShown: false }}>
                        <Tab.Screen name={"Login"} component={StartPage}/>
                        <Tab.Screen name={"Register"} component={Register}/>
                    </Tab.Navigator>
                </AuthenticatedContext.Provider>
            </NavigationContainer>
        );
    } else {
        if(user.type==="parent") {
            return ( // user is authenticated and the parent user
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{headerShown: false }}>
                        <Tab.Screen name={"Dashboard"} component={ParentDashboard} setAuthenticated={setAuthenticated} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        } else {
            return ( // user is authenticated and a child (supervised) user
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{headerShown: false }}>
                        <Tab.Screen name={"Dashboard"} component={ChildDashboard} setAuthenticated={setAuthenticated} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
    }
}
