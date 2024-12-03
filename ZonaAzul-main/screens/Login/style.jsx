import { StyleSheet } from "react-native";

export const Homestyle = StyleSheet.create({
    root: {
        backgroundColor: '#1c1c2b',
        height: '100%',
        alignItems: 'center',
        gap: 60
    },

    Titulo: {
        fontSize: 30,
        color: '#fff',
        fontWeight: "bold",
    },

    TituloLogin: {
        color: '#00b4d8',
        fontSize: 30,
        fontWeight: 'bold',
    },

    Logo: {
        alignItems: 'center',
        marginTop: 120,
        gap: 20,
    },

    card: {
        backgroundColor: '#03045e',
        height: 400,
        width: 350,
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input:{
        backgroundColor: '#b8b5b5',
        height: 50,
        width: 250,
        marginTop: 40,
    
        
    },

    button: {
        backgroundColor: '#00b4d8',
        height: 60,
        width: 250,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 50

    },
    
})