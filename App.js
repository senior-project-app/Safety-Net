import 'react-native-gesture-handler';
import ParentDashboard from "./frontend/Pages/ParentDashboard";
import ChildDashboard from "./frontend/Pages/ChildDashboard";
import Register from "./frontend/Pages/Register";
import StartPage from './frontend/Pages/StartPage';
import ParentInfo from "./frontend/Pages/ParentInfo";
import ChildInfo from "./frontend/Pages/ChildInfo";
import SignIn from "./frontend/Pages/SignIn";
import { useNavigation } from '@react-navigation/native';
import {Image, View, Text} from 'react-native';
import {useFonts, Inter_900Black, Inter_500Medium} from '@expo-google-fonts/inter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './frontend/Components/Styles';
import {useState} from "react";
import {AuthenticatedContext} from "./backend/Contexts";
import Logout from "./frontend/Pages/Logout";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {

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
            <Stack.Navigator>
            <Stack.Screen
              name="RegisterSignIn"
              component={RegisterSignIn}
              options={{ headerShown: false }}
            />
                <Stack.Screen name="ParentInfo" component={ParentInfo}  />
                <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
                <Stack.Screen name="ChildInfo" component={ChildInfo} />
                <Stack.Screen name="ChildDashboard" component={ChildDashboard} />
            </Stack.Navigator> 
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


function RegisterSignIn() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={StartPage} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

}

export default App;