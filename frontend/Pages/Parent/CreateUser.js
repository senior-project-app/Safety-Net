import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import { supabaseAccountCreator } from "../../../backend/database";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";

function CreateUser({ navigation }) {
    const [name, setName] = useState("");
    const { session, metadata } = useContext(SessionContext);

    async function createUser() {
        // check that all values are defined
        if (!name) return Alert.alert("Name cannot be blank.");

        // preformat name to remove spaces and replace with _
        const fName = name.toLowerCase().replace(/ /g,"_");

        const { error } = await supabaseAccountCreator.auth.signUp(
            {
                email: `${metadata[0].invite_code + fName}@safetynet.com`,
                password: metadata[0].invite_code,
                options: {
                    data: {
                        name: fName,
                        invite_code: metadata[0].invite_code,
                        role: "child",
                        parent_id: metadata[0].id
                    }
                }
            }
        );

        if(error) return Alert.alert(error.message);

        // account was paired successfully
    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Enter name</Text>
                <Input placeholder={"Name"} setValue={setName} value={name}/>

                <Button text={"Create"} onPress={createUser}/>
            </View>
        </View>
    );
}

export default CreateUser;