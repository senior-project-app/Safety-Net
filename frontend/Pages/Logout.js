import {Text, View} from "react-native";
import Button from "../Components/Button";
import styles from "../Components/Styles";

const Logout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Button myText={"Sign out"} onPress={() => navigation.navigate('RegisterSignIn')} ></Button>
            </View>
        </View>
    )
}

export default Logout;