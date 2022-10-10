import { StyleSheet } from "react-native";

const styleLogin = StyleSheet.create({
    
    /* fundo de tudo */
    background:{
        alignItems: 'center'
    },
    /* editando logo */
    ContainerLogo:{
        paddingTop: 10,
    },
    Logo:{
       width: 250,
       height: 250
    },
    /* corpo campos */
    container:{
        alignItems: "center",
        marginTop: 20,
        width: '100%',
    },
    /* campo de informacões */
    input:{
        paddingLeft: 15,
        fontSize: 14,
        width:'85%',
        borderRadius:12,
        borderColor: "#427aaa",
        borderWidth: 2,
    },

    /* textos dos campos */
    textInput: {
        paddingVertical: 5,
        marginRight: '70%',
        fontSize: 18,
        color: 'black',
    },
   /* botao de links */
    link:{
        padding: 15,
        color: '#333333',
        fontSize: 16,
    },
    /* botao de acessar */
    botao:{
        fontSize: 18,
        backgroundColor: '#ED7A11',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        color: 'white',
        textTransform: 'uppercase'
    },
    /* linha detalhe */
    linha:{
        borderColor: '#ED7A11',
        border: 2,
        borderWidth: 0.5,
        width: 100,
    }
})
export default styleLogin;