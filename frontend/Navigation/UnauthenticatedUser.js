import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import {Pair} from "../Pages/Pair";
import {Image} from "react-native";
import {LOGIN_ICON, PAIR_ICON, REGISTER_ICON} from "../Icons";

function UnauthenticatedUser({ navigation }) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
        <Tab.Screen options={{ tabBarIcon: () => (<Image source={LOGIN_ICON} />) }} name="Login" component={Login} />
        <Tab.Screen options={{ tabBarIcon: () => (<Image source={PAIR_ICON} />) }} name="Pair" component={Pair} />
        <Tab.Screen options={{ tabBarIcon: () => (<Image source={REGISTER_ICON} />) }} name="Register" component={Register} />
        </Tab.Navigator>
    );
}

export default UnauthenticatedUser;

// cZRWU4