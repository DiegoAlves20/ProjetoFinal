import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styleInicial } from "../Frames/HomePage/StyleHome";

const DATA = [
    {
      id:'',
      nomeVaga:'Progamador Android - Kotlin',
      nomeEmpresa:'gitsoluções',
      ramo:'Engenharia',
      local:'COTIA - SP',
      data:'12/04'
    },
    {
      id:'',
      nomeVaga:'Progamador Android - Kotlin',
      nomeEmpresa:'gitsoluções',
      ramo:'Engenharia',
      local:'COTIA - SP',
      data:'12/04'
    },
    {
      id:'',
      nomeVaga:'Progamador Android - Kotlin',
      nomeEmpresa:'gitsoluções',
      ramo:'Engenharia',
      local:'COTIA - SP',
      data:'12/04'
    }, 
  ];
  const Item = ({nomeVaga, nomeEmpresa, ramo, local, data}) => (
      <View style={styleInicial.item}>
        <Text style={styleInicial.nomeVaga}>{nomeVaga}</Text>
        <Text style={styleInicial.nomeEmpresa}>{nomeEmpresa}</Text>
        <Text style={styleInicial.ramo}>{ramo}</Text>
        <Text style={styleInicial.local}>{local}</Text>
        <Text style={styleInicial.data}>{data}</Text>
        <TouchableOpacity style={styleInicial.btn}>
          <Text style={{textAlign:'center',color:'white'}}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    );
 export const ListaRender = () => {
    const renderItem = ({item}) => (
      <Item 
        nomeVaga={item.nomeVaga}
        nomeEmpresa={item.nomeEmpresa}
        ramo={item.ramo}
        local={item.local}
        data={item.data}
       />              
    )
    return (
      <FlatList
      style={styleInicial.lista}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}/>
      )
  }