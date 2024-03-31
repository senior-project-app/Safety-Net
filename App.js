import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './frontend/Pages/StartPage';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["fontFamily \"Cochin\" is not a system font and has not been loaded through expo-font."]);

export default function App() {
    return (
        <View style={styles.container}>
            <StartPage />
        </View>
    );
}

const colorLightPurple = '#D8CCFF'; //
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorLightPurple,
    },
});
