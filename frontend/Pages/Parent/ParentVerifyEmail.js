import {Text, View} from "react-native";
import styles from "../../Components/Styles";
import Button from "../../Components/Button";

const ParentVerifyEmail = ({ navigation }) => {
    return (
        <View style={styles.centeredContainer}>
            <View style={styles.child}>
                <Text style={styles.centeredHeadline}>Please verify your email to sign in.</Text>

                <Text style={styles.centeredText}>
                    Use the access code sent in the email to pair other devices to your account.
                    They will appear in your dashboard once successfully signed in.
                </Text>

                <Button text={"Sign in"} onPress={() => navigation.navigate('RegisterSignIn')}></Button>
            </View>
        </View>
    );
}

export default ParentVerifyEmail;