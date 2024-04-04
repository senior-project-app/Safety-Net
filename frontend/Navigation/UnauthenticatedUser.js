import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import StartPage from "../Pages/StartPage";
import Register from "../Pages/Register";
import {LOGIN_ICON, REGISTER_ICON} from "../Icons";

function UnauthenticatedUser({ navigation }) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={LOGIN_ICON} />) }} name="Login" component={StartPage} />
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={REGISTER_ICON} />) }} name="Register" component={Register} />
        </Tab.Navigator>
    );
}

export default UnauthenticatedUser;