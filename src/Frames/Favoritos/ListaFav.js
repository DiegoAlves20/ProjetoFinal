import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styleInicial } from "../HomePage/StyleHome";


  const DATA = [
      {
          id:'',
          nomeVaga:'Desenvolvedor Java Sênior',
          nomeEmpresa:'Salesforce',
          ramo:'Soluções de TI',
          local:'Itapevi - SP',
          data:'12/04'
      },
      {
          id:'',
          nomeVaga:'Desenvolvedor Java Sênior',
          nomeEmpresa:'Salesforce',
          ramo:'Soluções de TI',
          local:'Itapevi - SP',
          data:'12/04'
      },
      {
          id:'',
          nomeVaga:'Desenvolvedor Java Sênior',
          nomeEmpresa:'Salesforce',
          ramo:'Soluções de TI',
          local:'Itapevi - SP',
          data:'12/04'
      },
      {
          id:'',
          nomeVaga:'Desenvolvedor Java Sênior',
          nomeEmpresa:'Salesforce',
          ramo:'Soluções de TI',
          local:'Itapevi - SP',
          data:'12/04'
      },
  ];
  const ItemFav = ({nomeVaga, nomeEmpresa, ramo, local, data}) => (
    <View>
    <TouchableOpacity>
        <View style={styleInicial.item}>
          <Text style={styleInicial.nomeVaga}>{nomeVaga}</Text>
          <Text style={styleInicial.nomeEmpresa}>{nomeEmpresa}</Text>
          <Text style={styleInicial.ramo}>{ramo}</Text>
          <Text style={styleInicial.local}>{local}</Text>

          {/* <TouchableOpacity style={styleInicial.btn}>
            <Text style={{textAlign:'center',color:'white'}}>Ver Detalhes</Text>
          </TouchableOpacity> */}
        </View>
    </TouchableOpacity>
    </View>
    
    
  );

  export const ListaRenderFav = () => {
    const renderItem = ({item}) => (
      <ItemFav
        nomeVaga={item.nomeVaga}
        nomeEmpresa={item.nomeEmpresa}
        ramo={item.ramo}
        local={item.local}
       
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