import { useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styleInicial } from "../Frames/HomePage/StyleHome";
import Details from "./TextInput";
const url = 'http://10.92.198.10:8080/api/empresa/vaga/';


export const ListaRender = () => {

  const [resourceType, setResourceType] = useState([]);
  const [items, setItems] = useState([])
  
  useEffect(() => {
      const fetchRT = async () => {
          const response = await 
          /* fetch da API */
            fetch(`${url}${resourceType}`);
          const responseJSON = await response.json();
          setItems(responseJSON)
          
          console.log(responseJSON)
      };
          fetchRT();
  }, [])

  const changeRT = (resourceType) => {
      setResourceType(resourceType);
  }
  
  const Item = ({vaga}) => (

    
      <View style={styleInicial.item}>
        <Text style={styleInicial.nomeVaga}>{vaga.tituloVaga}</Text>
        <Text style={styleInicial.nomeEmpresa}>{vaga.empresa}</Text>
        <Text style={styleInicial.ramo}>{vaga.contratacao}</Text>
        <Text style={styleInicial.local}>{vaga.periodo}</Text>
        
        
            <Details/>
     
             
        
      </View>
  );

    const renderItem = ({item}) => (
      <Item 
        vaga = {item}
       />              
    )
    return (
      <FlatList
        style={styleInicial.lista}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
      )
  }