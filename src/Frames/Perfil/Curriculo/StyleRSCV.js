import { StyleSheet } from "react-native";



export const StylesResumoCV = StyleSheet.create({

    container:{
        backgroundColor: 'white'
    },
    titulo:{
        paddingTop: 40,
        fontSize: 24,
        fontWeight: '400',
        color: 'black',
        textAlign: "center",
    },
    linha:{
        marginTop: -20,
        marginHorizontal: 155,
        borderBottomWidth:2,
        borderBottomColor:'#EF8A2E',
        width: 100
    },
    item:{
        marginTop:18,
        padding:10,
        borderColor:'#ED7A11',
        borderWidth:2,
        borderRadius:8,
        fontSize:16,
        color:'black',
        backgroundColor:'white',
        margin:5,
        width:375,
        marginHorizontal:'5%',
        borderBottomWidth:18,
        borderBottomColor:'#427aaa'
    },
    subTitulo:{
        paddingTop: 10,
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    dados:{
        marginHorizontal: 10,
        paddingTop: 2,
        fontSize: 14,
    },
    botao:{
        width: 120,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#EF8A2E',
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 110
    },
    editarDados:{
        color: 'white',
        textAlign: "center",
    },
    link:{
        marginTop: 30,
        width:'100%',
        backgroundColor: '#427AAA',
        height: 70,
        borderTopEndRadius: 15,
        borderTopStartRadius:15,
    },
    linkExpo:{
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 10,
        fontWeight:"600",
        paddingTop: 20,
    }
})