import {StyleSheet} from "react-native";

const colorDarkPurple = '#23027D'; //
const colorRoyalPurple = '#6E19FF'; //
const colorWhite = '#FFFFFF'; //
const colorGray = '#707070'; //
const colorBlack = '#FFFFFF'; //
const colorLightPurple = '#D8CCFF'; //
const alternativeBgColor = '#FFFFFF';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: alternativeBgColor,
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly", // for spacing on the vertical
        alignItems: "center",
        backgroundColor: alternativeBgColor,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: "center", // for spacing on the vertical
        alignItems: "center",
        backgroundColor: alternativeBgColor,
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
    centeredText: {
        //alignSelf: "flex-start",
        textAlign: "center",
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        fontWeight: 'regular',
        color: colorDarkPurple,
    },
    centeredHeadline: {
        //alignSelf: "flex-start",
        textAlign: "center",
        fontFamily: 'Inter_500Medium',
        fontSize: 25,
        fontWeight: 'bold',
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
    purpleTextBox: {
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 9,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30,
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

export default styles;