import React, { useState } from 'react';
import {Alert, Text, View} from 'react-native';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import styles from "../../Components/Styles";
import {supabase} from "../../../backend/database";
import AsyncStorage from '@react-native-async-storage/async-storage';



const getMetadata = async () => {
    // const {data, error} = await supabase.rpc('get_child_users', {invite_code_text: metadata[0].invite_code});
    // if(error) console.log(error);
    // else console.log(data);
}

const getChildren = async (metadata) => {
    // const {data, error} = await supabase.rpc('get_child_users', {invite_code_text: metadata[0].invite_code});
    // if(error) console.log(error);
    // else console.log(data);
}

const ParentSignIn = ({ navigation }) => {
    const [email, setEmail] = useState("demo@demo.com");
    const [password, setPassword] = useState("password");

    async function postAuth() {
        // user is authenticated, get data and commit to local storage
        // await storeUserData(data.session.user);
        // await getChildren(data.session.user.user_metadata);
    }

    async function validateAndAuthenticate() {
        // check that all values are defined
        if (!email) return Alert.alert("Email cannot be blank.");
        if (!password) return Alert.alert("Password cannot be blank.");

        // everything is good, try to authenticate the user
        const {error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });


        if (error) Alert.alert(error.message);
        else await postAuth();
    }

    return (
        <View style={styles.child}>
            <Text style={styles.text}>Sign In</Text>
            <Input placeholder={"Email"} setValue={(text) => setEmail(text)} value={email}/>
            <Input placeholder={"Password"} setValue={(text) => setPassword(text)} value={password} secure={true}/>
            <Button text={"Sign In"} onPress={validateAndAuthenticate} ></Button>
        </View>
    );
}

export default ParentSignIn;