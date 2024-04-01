import { StyleSheet, View } from 'react-native';
import StartPage from './frontend/Pages/StartPage';
import { useFonts, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Inter_900Black,
        Inter_500Medium
    });

    if (!fontsLoaded) { return null; }

    return (
        <View style={styles.appContainer}>
            <StartPage />
        </View>
    );
}

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; //
const colorWhite = '#FFFFFF'; //
const colorGray = '#707070'; //
const colorBlack = '#FFFFFF'; //
const colorLightPurple = '#D8CCFF'; //

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colorLightPurple,
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly", // for spacing on the vertical
        alignItems: "center",
        marginTop: '25%', // forces content to be closer to the center by reducing amount of space for "space-evenly"
        marginBottom: '25%', // forces conent to be closer to the center
        backgroundColor: colorLightPurple,
    },
    child: {
        width: "75%" // makes children be the same width
    },
    registerButton: {
        fontFamily: 'Inter_500Medium',
        fontWeight: 'regular',
        color: "blue",
    },
    text: {
        alignSelf: "flex-start",
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        fontWeight: 'regular',
        color: colorDarkPurple,
    },
    logo: {
        fontFamily: 'Inter_900Black',
        fontSize: 40,
        fontWeight: 'regular',
        color: colorDarkPurple,
    },
    purpleInput: {
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 9,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#23027D',
        borderColor: '#23027D',
        backgroundColor: '#FFFFFF',
    },
    purpleButton: {
        textAlign: 'center',
        maxWidth: "100%",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 9,
        fontSize: 16,
        color: colorWhite,
        borderColor: colorDarkPurple,
        backgroundColor: colorRoyalPurple,
    },
});
