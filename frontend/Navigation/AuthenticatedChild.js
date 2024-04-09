import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Logout from "../Pages/Logout";
import ChildDashboard from "../Pages/Child/ChildDashboard";
import {HOME_ICON, LOGOUT_ICON} from "../Icons";

function AuthenticatedChild({ navigation }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={HOME_ICON} />) }} name="Dashboard" component={ChildDashboard} />
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={LOGOUT_ICON} />) }} name="Logout" component={Logout} />
        </Tab.Navigator>
    );
}

export default AuthenticatedChild;