import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        height: 56,
        backgroundColor: '#262626',
        minWidth: 250,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
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
    },
    dados: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '96%',
        paddingTop: 20,
        paddingBottom: 20
    }
});