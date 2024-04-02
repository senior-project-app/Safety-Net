import ButtonComponent from "../Components/ButtonComponent";
import CustomButton from "../Components/ButtonComponent";
import {AuthenticatedContext} from "../../backend/Contexts";
import {useContext} from "react";
import styles from "../Components/Styles";
import {Text, View} from "react-native";
import CustomInput from "../Components/CustomInput";

const Logout = () => {
    const { authenticated, setAuthenticated } = useContext(AuthenticatedContext);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <CustomButton myText={"Sign out"} onPress={() => setAuthenticated(false)} ></CustomButton>
            </View>
        </View>    )
}

export default Logout;