import { StyleSheet } from "react-native";


export const stylesPerfil = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    viewBluePerfil :{
        width:'100%',
        height:100,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        backgroundColor:'#427AAA'
    },  
    viewInfoPerfil:{
        marginTop:18
    },
   info:{
    color:'black',
    textAlign:'center',
    marginTop:18,
    fontSize:20
   },
   viewBtn:{
    backgroundColor:'#ed7a11',
    width:'50%',
    marginTop:20,
    marginHorizontal:55,
    paddingLeft:35,
    paddingRight:35,
    borderRadius:8
   }
    

})