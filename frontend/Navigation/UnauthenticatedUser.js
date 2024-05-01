import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import {Pair} from "../Pages/Pair";
import {Image} from "react-native";
import {LOGIN_ICON} from "../Icons";

function UnauthenticatedUser({ navigation }) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    switch(route.name) {
                        case 'Login':
                            return <Image src={LOGIN_ICON}/>;
                        case 'Pair':
                            return null;
                        case 'Register':
                            return null;
                    }
                }
            })}
        >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Pair" component={Pair} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    );
}

export default UnauthenticatedUser;