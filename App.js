import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {NavigationContainer} from "@react-navigation/native";
import ParentDashboard from "./frontend/Pages/Parent/ParentDashboard";
import ChildInfo from "./frontend/Pages/Child/ChildInfo";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildDashboard from "./frontend/Pages/Child/ChildDashboard";
import ParentEmailVerification from "./frontend/Pages/Parent/ParentEmailVerification";
import UnauthenticatedUser from "./frontend/Navigation/UnauthenticatedUser";

const Stack = createNativeStackNavigator();
export default function App() {


    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="UnauthenticatedUser" component={UnauthenticatedUser} options={{ headerShown: false }} />
                <Stack.Screen name="ParentEmailVerification" component={ParentEmailVerification}/>

                <Stack.Screen name="ParentDashboard" component={ParentDashboard} options={{ headerShown: false }}/>
                <Stack.Screen name="ChildInfo" component={ChildInfo} />

                <Stack.Screen name="ChildDashboard" component={ChildDashboard} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

