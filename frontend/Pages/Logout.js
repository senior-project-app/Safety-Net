import {Text, View} from "react-native";
import Button from "../Components/Button";
import styles from "../Components/Styles";
import {supabase} from "../../backend/database";

const Logout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>SafetyNet</Text>
            </View>

            <View style={styles.child}>
                <Button text={"Sign out"} onPress={() => supabase.auth.signOut()} ></Button>
            </View>
        </View>
    )
}

export default Logout;