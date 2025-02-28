import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262626',
        flexDirection: 'row',
        borderRadius: 5,
        width: '96%',
        marginBottom: 20,
    },
    text: {
        display: 'flex', 
        flexWrap: 'wrap'
    }
});