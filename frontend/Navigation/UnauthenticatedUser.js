import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import {LOGIN_ICON, PAIR_ICON, REGISTER_ICON} from "../Icons";
import {Pair} from "../Pages/Pair";

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