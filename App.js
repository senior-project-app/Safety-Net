
import 'react-native-gesture-handler';
import ParentDashboard from "./frontend/Pages/ParentDashboard";
import ChildDashboard from "./frontend/Pages/ChildDashboard";
import Register from "./frontend/Pages/Register";
import StartPage from './frontend/Pages/StartPage';
import ParentInfo from "./frontend/Pages/ParentInfo";
import ChildInfo from "./frontend/Pages/ChildInfo";
import SignIn from "./frontend/Pages/SignIn";

import {Image, View} from 'react-native';
import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './frontend/Components/Styles';
import {useState} from "react";
import {AuthenticatedContext} from "./backend/Contexts";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  const MyStack = () => { // Stack navigator

    return (
      <NavigationContainer>
      {
            <Stack.Navigator initialRouteName="StartPage">;
            <Stack.Screen name="Register" component={Register} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="SignIn" component={SignIn} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="StartPage" component={StartPage} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="ParentInfo" component={ParentInfo} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="ParentDashboard" component={ParentDashboard} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="ChildInfo" component={ChildInfo} /*options={{title: 'Boot'}}*/ />
            <Stack.Screen name="ChildDashboard" component={ChildDashboard} /*options={{title: 'Boot'}}*/ />
          </Stack.Navigator> 
      }
    </NavigationContainer>
    );
  };
  
    const [authenticated, setAuthenticated] = useState(false);
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
