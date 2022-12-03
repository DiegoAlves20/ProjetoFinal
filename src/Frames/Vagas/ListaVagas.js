import React from "react";
import { TouchableOpacity,Text,View,FlatList } from "react-native";
import { styleInicial } from "../HomePage/StyleHome";
    
import { url } from "../../Components/ListaVagaRecente";


    const [resourceType, setResourceType] = useState([]);
    const [item, setItems] = useState([])

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

  setResourceType(resourceType);

    const ItemVagas = ({nomeVaga, nomeEmpresa, ramo, local, data}) => (
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

      export const ListaRenderVagas = () => {
        const renderItem = ({item}) => (
          <ItemVagas
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
      

