import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    innerContainer: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        alignItems: 'center'
    },
    artist: {},
    year: {
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold',
    },
    soldOutContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    soldOutTitle: {
        color: 'red',
    },
    contentContainer: {
        flexDirection: 'row',

    }
});