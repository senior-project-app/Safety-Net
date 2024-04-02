import React, {useContext, useState} from 'react';
import { Text, View, Alert} from 'react-native';
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/ButtonComponent";
import {AuthenticatedContext} from "../../backend/Contexts";
import styles from "../Components/Styles";
import axios from 'axios';

function Register({ navigation }) {
    const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);
    const [ name,  setName ] = useState("");
    const [ email,  setEmail ] = useState("");
    const [ password,  setPassword ] = useState("");
    const [ confirm,  setConfirm ] = useState("");

    async function register() {

        const url = "http://172.16.134.148:5000/register"; // TODO: UPDATE WHEN WE DEMO, MUST BE DEVICE LOCAL IP
        const data = {
            name: name,
            email: email,
            password: password,
        }

        if (password != confirm){
            Alert.alert("Passwords must match!");
            return;
        }
        if (password == "" || name == "" || email == ""){
            Alert.alert("Fields cannot be blank.");
            return;
        }

        setConfirm("");
        setEmail("");
        setName("");
        setPassword("");


        // TODO: Store user in database
        // FOR PAGE TESTING PURPOSES
        navigation.navigate('ParentInfo');
        // FOR PAGE TESTING PURPOSES



        axios.post(url, data)
            .then((res) => {
                // success, authenticate user
                setAuthenticated(true);

                navigation.navigate('ParentInfo');

            })
            .catch((err) => {
                // report error
            });

    }

    return (
        <View style={styles.centeredContainer}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.text}>Register</Text>
                <CustomInput placeholder={"Name"} setText={setName} value={name}/>
                <CustomInput placeholder={"Email"} setText={setEmail} value={email}/>

                <CustomInput placeholder={"Password"} setText={setPassword} value={password} secure={true}/>
                <CustomInput placeholder={"Confirm Password"} setText={setConfirm} value={confirm} secure={true}/>
                <CustomButton myText={"Register"} onPress={register}/>
            </View>
        </View>
    );
}
export default Register;