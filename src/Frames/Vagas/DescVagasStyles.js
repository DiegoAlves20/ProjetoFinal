
import { StyleSheet } from "react-native";


const StylesDescVagas = StyleSheet.create({
  container:{
    backgroundColor: "#FFFFFF",
    
  },
  navBar:{
    width:'100%',
    backgroundColor: '#EF8A2E',
    height: 100,
  
  },

  cabecalho:{
    backgroundColor: '#EF8A2E',
    height: 50,
  },

  salvar:{
    paddingTop: 10,
    right: 20,
    fontSize: 16,
    position: 'absolute',
    color: 'white'



  },
  Titulo:{
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
    marginBottom:10,
    fontWeight:"800",
    


  },
  NEmpre:{
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: "center",

  },

  ladoAlado:{
    
    marginVertical:20,
    justifyContent:'space-between',
    flexDirection: 'row'

  },
  lAltexto:{
    fontSize:16,
    color: '#427AAA'
  },
  Desc:{
    marginHorizontal:20,
    
  },
  texto:{
    marginHorizontal: 10,
    paddingTop: 5,
    fontSize: 14,

  },
  textoQuebra:{
    marginHorizontal: 10,
    paddingTop: 5,
    fontSize: 14,
    width: 160,



  },
  subTitulo:{
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },



  link:{
    position: 'absolute',
    width:'100%',
    bottom: 0,
    height: '55%',
    backgroundColor: '#427AAA',
    borderTopEndRadius: 15,
    borderTopStartRadius:15,
  }, 
   
  linkTitulo:{
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: "center",
    fontWeight:"600",
    textAlignVertical: "center",
    height: 70,
    
    

  },

  modalLink:{
    marginTop: 30,
    backgroundColor: '#427AAA',
    borderTopEndRadius: 15,
    borderTopStartRadius:15,
  },

  linkTopic:{
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    paddingBottom: 10


  }, 
  dados:{
    textAlign: "center",
    fontSize: 20,
    color: 'white',
    paddingBottom: 35
  }, 



  modal:{
    height: 50,
    backgroundColor: 'red'

  },
  linha:{
    marginHorizontal: 40,
    marginVertical: -10,
    borderBottomWidth:2,
    borderBottomColor:'#EF8A2E',
    width: 300
  }
})
export default StylesDescVagas;