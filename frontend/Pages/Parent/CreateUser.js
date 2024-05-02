import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {supabaseAccountCreator} from "../../../backend/database";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";

function CreateUser({ navigation }) {
    const { session, setSession } = useContext(SessionContext);
    const [name, setName] = useState("");

    async function createUser() {
        // check that all values are defined
        if (!name) return Alert.alert("Name cannot be blank.");

        // preformat name to remove spaces and replace with _
        const fName = name.toLowerCase().replace(/ /g,"_");

        const { error } = await supabaseAccountCreator.auth.signUp(
            {
                email: `${session.user.user_metadata.code + fName}@safetynet.com`,
                password: session.user.user_metadata.code,
                options: {
                    data: {
                        name: name,
                        role: "supervised",
                        supervisor: session.user.id,
                    }
                }
            }
        );
        setName("");


        if(error) return Alert.alert(error.message);
        Alert.alert("User creation successful");
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

            <Text style={styles.centeredText}>Your Invite Code: {session.user.user_metadata.code}</Text>

        </View>
    );
}

export default CreateUser;