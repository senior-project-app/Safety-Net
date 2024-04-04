import {Image, View} from 'react-native';
import StartPage from './frontend/Pages/StartPage';
import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from "react";
import ParentDashboard from "./frontend/Pages/ParentDashboard";
import ParentInfo from "./frontend/Pages/ParentInfo";
import ChildInfo from "./frontend/Pages/ChildInfo";
import Register from "./frontend/Pages/Register";
import Logout from "./frontend/Pages/Logout";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildDashboard from "./frontend/Pages/ChildDashboard";

const Stack = createNativeStackNavigator();


export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
    //const [childauthenticated, setChildAuthenticated] = useState(false);
    const [user, setUser] = useState({type: "parent"});

    var parentLogin = false;
    var childLogin = false;


    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    if (!fontsLoaded) return null;

    const Tab = createBottomTabNavigator();


    return ( // user is not authenticated, show login/register pages
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="RegisterSignIn"
                    component={RegisterSignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ParentInfo" component={ParentInfo}  />
                <Stack.Screen
                    name="ParentDashboard"
                    component={ParentLoginLogout}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ChildInfo" component={ChildInfo} />
                <Stack.Screen
                    name="ChildDashboard"
                    component={ChildLoginLogout}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

    function RegisterSignIn() {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator>
                <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/login.png')} />) }} name="SignIn" component={StartPage} />
                <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/register.png')} />) }} name="Register" component={Register} />
            </Tab.Navigator>
        );
    }

  function ParentLoginLogout() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={{headerShown: false }}>
        <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/home.png')} />) }} name="Home" component={ParentDashboard} />
        <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/logout.png')} />) }} name="Sign out" component={Logout} />
    </Tab.Navigator>
    );
  }

  function ChildLoginLogout() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={{headerShown: false }}>
          <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/home.png')} />) }} name="Home" component={ChildDashboard} />
          <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('./assets/icons/logout.png')} />) }} name="Sign out" component={Logout} />
    </Tab.Navigator>
    );
  }
}
