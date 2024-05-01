import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Logout from "../Pages/Logout";
import ChildDashboard from "../Pages/Child/ChildDashboard";
import {HOME_ICON, LOGOUT_ICON} from "../Icons";
import {useAssets} from "expo-asset";

function AuthenticatedChild({ navigation }) {
    const [assets, error] = useAssets([require('../../assets/icons/home.png'), require('../../assets/icons/logout.png')]);


    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={require('../../assets/icons/home.png')} />) }} name="Dashboard" component={ChildDashboard} />
            <Tab.Screen options={{ tabBarIcon: () => (<Image source={LOGOUT_ICON} />) }} name="Logout" component={Logout} />
        </Tab.Navigator>
    );
}

export default AuthenticatedChild;