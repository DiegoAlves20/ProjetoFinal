import { StyleSheet } from "react-native";

export const styleInicial = StyleSheet.create({
    container:{
        
    },
    header:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        backgroundColor:'#427AAA',
        borderBottomLeftRadius:9,
        borderBottomRightRadius:9
    },
    image:{
        marginTop:2,
        marginHorizontal:-35,
        width:75,
        height:75,
        borderRadius:50
    },
    nome:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
        marginLeft:45,
        marginBottom:-20
    },
    imageMenu:{
        width:25,
        height:25,
        marginLeft:50
    },
    vagaRecente:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 20,
        marginTop: 25 
    },
    lista:{
     
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
    nomeVaga:{
        color:'black',
        fontSize:19,
        fontWeight:'bold',
        fontWeight:'600'
    },
    nomeEmpresa:{
        marginLeft:3,
        marginTop:5,
        textTransform:'uppercase',
        fontWeight:'500',
        color:'black'
    },
    ramo:{
        marginLeft:3,
        marginTop:8,
        color:'black'
    },
    local:{
        marginLeft:3,
        marginTop:8,
        color:'black'
    },
    data:{
        fontWeight:'bold',
        fontWeight:'600',
        color:'black',
        width:40,
        position:'relative',
        left:320,
        top:50,
    },
    btn:{
        marginHorizontal:'30%',
        width:150,
        backgroundColor:'#ed7a11',
        borderRadius:8,
        padding:10,
       position:'relative',
       top:18
    },
    stack:{
        backgroundColor:'red'
    },

    viewVP:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    vagaPerfil:{
        marginLeft:3,
        marginTop:5,
        textTransform:'uppercase',
        fontWeight:'500',
        fontSize:18,
        color:'black',
     
        borderBottomWidth:1,
        borderBottomColor:'#427AAA'
    }
})
