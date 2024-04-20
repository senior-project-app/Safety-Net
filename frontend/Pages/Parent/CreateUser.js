import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {getUserMetadata, supabaseAccountCreator} from "../../../backend/database";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import styles from "../../Components/Styles";
import {SessionContext} from "../../../backend/Context";

function CreateUser({ navigation }) {
    const [name, setName] = useState("");
    const [ metadata, setMetadata ] = useState(null);
    const { session, setSession } = useContext(SessionContext);

    async function createUser() {
        // check that all values are defined
        if (!name) return Alert.alert("Name cannot be blank.");

        // preformat name to remove spaces and replace with _
        const fName = name.toLowerCase().replace(/ /g,"_");

        const { error } = await supabaseAccountCreator.auth.signUp(
            {
                email: `${session.user.user_metadata.invite_code + fName}@safetynet.com`,
                password: session.user.user_metadata.invite_code,
                options: {
                    data: {
                        name: name,
                        role: "supervised",
                        parent_id: session.user.id,
                    }
                }
            }
        );
        if(error) return Alert.alert(error.message);
        setName("");
        Alert.alert("User creation successful");
    }


    useEffect(() => {
        getUserMetadata().then()
            .then((res) => {
                setMetadata(res);
            })
    }, []);

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