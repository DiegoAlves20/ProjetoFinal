import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styleInicial } from "./StyleHome";
import { ListaRender } from "../../Components/ListaVagaRecente";
import { ListaRenderVP } from "../../Components/ListaVagaPerfil";


export default function TelaInicial({navigation}) {
  
  const handleGoToMenu = () => {
    navigation.navigate("Menu")
    
  }
  return (
    <View>
      <ScrollView >
        <View style={styleInicial.header}>

          <Image style={styleInicial.image} source={require('../../assets/fotoPerfil.png')} />
          <Text style={styleInicial.nome}>{'item.nomeUsuario'}</Text>
          <TouchableOpacity onPress={handleGoToMenu} >
             <Image style={styleInicial.imageMenu} source={require('../../assets/menu.png')} />
          </TouchableOpacity>
         
        

          
        </View>

        <Text style={styleInicial.vagaRecente} >Vagas Recentes</Text>
        <ListaRender />
        
        
        <View style={styleInicial.viewVP}>
         
          <ListaRenderVP/>
        </View> 
       <View>
        
       </View>
        
      </ScrollView>
    </View>
  )
}