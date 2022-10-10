import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styleInicial } from "./StyleHome";
import { ListaRender } from "../../Components/ListaVagaRecente";
import { ListaRenderVP } from "../../Components/ListaVagaPerfil";

import Tabs from "../Login/Tabs";
/* import  Menu from "./Menu"; */

export default function TelaInicial({ navigation }) {
  const handleGoToMenu = () => {
    navigation.navigate("Login")
  }
  return (
    <View>
      <ScrollView >
        <View style={styleInicial.header}>
          <Image style={styleInicial.image} source={require('../../assets/fotoPerfil.png')} />
          <Text onPress={handleGoToMenu} style={styleInicial.nome}>Olá DieGoo</Text>
          <Image style={styleInicial.imageMenu} source={require('../../assets/menu.png')} />
          {/* <Menu /> */}

          
        </View>
        <Text style={styleInicial.vagaRecente}>Vagas Recentes</Text>
        <ListaRender />

        <View style={styleInicial.viewVP}>
          <Text style={styleInicial.vagaPerfil}>Vagas com seu perfil !!!</Text>
          <ListaRenderVP/>
        </View> 
       
        
      </ScrollView>
    </View>
  )
}