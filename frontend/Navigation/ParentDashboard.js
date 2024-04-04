import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Logout from "../Pages/Logout";
import ParentDashboard from "../Pages/Parent/ParentDashboard";
import {HOME_ICON, LOGOUT_ICON} from "../Icons";

function AuthenticatedParent({ navigation }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={HOME_ICON} />) }} name="ParentDashboard" component={ParentDashboard} />
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={LOGOUT_ICON} />) }} name="Logout" component={Logout} />
        </Tab.Navigator>
    );
}

export default AuthenticatedParent;