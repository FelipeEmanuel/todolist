import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTop: {
        flex: 0.3,
        width: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 2
    },
    containerBottom: {
        flex: 0.7,
        backgroundColor: "#333333",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 20,
        height: 31,
        resizeMode: 'cover',
        marginRight: 6
    },
    text: {
        color: '#4ea8de',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -30,
        marginBottom: 42,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1e6f9f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    listEmptyText: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center'
    }
});