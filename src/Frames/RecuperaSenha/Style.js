import { StyleSheet  } from "react-native";

const styleEmail = StyleSheet.create({

    ContainerLogo:{
        paddingTop: 10,
        alignItems: 'center'

    },
    Logo:{
        width: 200,
        height: 200

     },
     containerText:{
        alignItems: 'center',
        marginTop: 20,

    },
    textTitulo:{
        fontSize: 20,
        color: 'black'


    },
    text:{
        color: 'black',
        paddingTop: 20
    },

    containerInput:{
     alignItems: 'center',
     marginTop: 40,
     width: '100%'

    },
    input:{
        paddingLeft: 15,
        fontSize: 14,
        width: '85%',
        borderRadius:12,
        borderColor: "#427aaa",
        borderWidth: 2,
    },
    textInput: {
        paddingVertical: 5,
        marginRight: '70%',
        fontSize: 18,
        color: 'black',
    },
    botao:{
        marginTop: 90,
        fontSize: 18,
        backgroundColor: '#ED7A11',
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius: 10,
        color: 'white',
        textTransform: 'uppercase'
    },
})
export default styleEmail;