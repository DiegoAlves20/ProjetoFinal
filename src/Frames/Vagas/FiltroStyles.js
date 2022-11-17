import { StyleSheet } from "react-native";

const styleFiltro = StyleSheet.create({
 /* corpo campos */
 container:{
    alignItems: "center",
    marginTop: 20,
    width: '100%',


},
titulo:{
    padding: 2,
    textTransform: "uppercase",
    fontSize: 16, 
    color: 'black',


},

texto:{
    color: 'black',

},
picker:{
    backgroundColor:'#c4c4c4',
    borderRadius:6,
    
},

select:{
    width: '90%',
    borderBottomColor: '#427aaa',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 10,
    
    

},

    /* botao de acessar */
 botao:{
        
    fontSize: 18,
    backgroundColor: '#ED7A11',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    color: 'white',
    textTransform: 'uppercase',


}

})
export default styleFiltro;