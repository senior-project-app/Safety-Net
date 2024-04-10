import ChildSignIn from "./Child/ChildSignIn";
import React, {useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ChildInfo from "./Child/ChildInfo";
import {NameContext} from "../../backend/Context";

const Stack = createStackNavigator();
export const Pair = ({ navigation }) => {
    const [name, setName] = useState("");
    const [inviteCode, setInviteCode] = useState("");

    return (
        <NameContext.Provider value={{ name: name, setName: setName, inviteCode: inviteCode, setInviteCode: setInviteCode }}>
            <Stack.Navigator>
                <Stack.Screen name={"EnterCode"} component={ChildSignIn}/>
                <Stack.Screen name={"EnterName"} component={ChildInfo}/>
            </Stack.Navigator>
        </NameContext.Provider>
    );

}