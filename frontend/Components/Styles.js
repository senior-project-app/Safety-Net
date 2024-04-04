import {StyleSheet} from "react-native";

// colors
const darkPurple = '#23027D';
const royalPurple = '#6E19FF';
const white = '#FFFFFF';
const backgroundColor = '#FFFFFF';

// font types
const TEXT_FONT_FAMILY = "Inter_500Medium";
const LOGO_FONT_FAMILY = "Inter_900Black";

// font sizes
const TEXT_FONT_SIZE = 20;
const TEXT_INPUT_FONT_SIZE = 15;
const HEADLINE_FONT_SIZE = 25;
const LOGO_FONT_SIZE = 40;

// child constants
const CHILD_MARGINS = 20;
const CHILD_MAX_WIDTH = "75%";

// margin and padding defaults
const DEFAULT_PADDING = 10;
const DEFAULT_MARGIN = 10;

// rounded corner constants
const BORDER_ROUNDED = 9;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly", // for spacing on the vertical
        alignItems: "center",
        backgroundColor: backgroundColor,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: "center", // for spacing on the vertical
        alignItems: "center",
        backgroundColor: backgroundColor,
    },
    child: {
        margin: CHILD_MARGINS,
        width: CHILD_MAX_WIDTH // makes children be the same width
    },
    registerButton: {
        fontFamily: TEXT_FONT_FAMILY,
        color: "blue",
    },
    text: {
        alignSelf: "flex-start",
        fontFamily: TEXT_FONT_FAMILY,
        fontSize: TEXT_FONT_SIZE,
        color: darkPurple,
    },
    centeredText: {
        textAlign: "center",
        fontFamily: TEXT_FONT_FAMILY,
        fontSize: TEXT_FONT_SIZE,
        color: darkPurple,
    },
    centeredHeadline: {
        textAlign: "center",
        fontFamily: TEXT_FONT_FAMILY,
        fontSize: HEADLINE_FONT_SIZE,
        color: darkPurple,
    },
    logo: {
        fontFamily: LOGO_FONT_FAMILY,
        fontSize: LOGO_FONT_SIZE,
        color: darkPurple,
    },
    purpleInput: {
        borderWidth: 2,
        borderRadius: BORDER_ROUNDED,
        padding: DEFAULT_PADDING,
        marginTop: DEFAULT_MARGIN,
        marginBottom: DEFAULT_MARGIN,
        fontSize: TEXT_INPUT_FONT_SIZE,
        color: darkPurple,
        borderColor: darkPurple,
        backgroundColor: backgroundColor,
    },
    purpleButton: {
        textAlign: 'center',
        padding: DEFAULT_PADDING,
        marginTop: DEFAULT_MARGIN,
        marginBottom: DEFAULT_MARGIN,
        borderRadius: BORDER_ROUNDED,
        fontSize: TEXT_INPUT_FONT_SIZE,
        color: white,
        borderColor: darkPurple,
        backgroundColor: royalPurple,
    },
});

export default styles;