import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import { styleInicial } from "../Frames/HomePage/StyleHome";
export const url = 'http://10.92.198.40:8080/api/empresa/vaga/';



const Connection = () => {
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
    }, [resourceType])

    const changeRT = (resourceType) => {
        setResourceType(resourceType);
    }
        


    
    return(
        <ScrollView>
                {items.map(item => (
                    <View style={styleInicial.item}>
                        {/* renderizando id's do banco de dados */}
                        <>
                        {
                           <View>
                                <Text> {item.tituloVaga}</Text>
                                <Text> {item.emailContato}</Text>
                                <Text> {item.whatsapp}</Text>
                                <Text> {item.contato}</Text>
                                <Text> {item.desejavel}</Text>
                            </View> 
                        }
                        </>
                        <TouchableOpacity 
                        onPress={ () => changeRT("")}
                        
                        style={{
                            backgroundColor:'#ed7a11',
                            padding:20,
                            position:'relative',
                            top:20, width:'50%',
                            borderRadius:10,
                            left:'25%'
                        }}
                        >
                            <Text style={{textAlign:'center', color:'white', fontSize:18}}>Ver detalhes</Text>
                        </TouchableOpacity>
                                
                     
                    </View>
                ))}
     
        </ScrollView>

    )
}

/* export const ListaRenderVagas = () => {
    const renderItem = ({item}) => (
      <ItemVagas
        nomeVaga={item.tituloVaga}
        nomeEmpresa={item.}
        ramo={item.whatsapp}
        local={item.contato}
        data={item.desejavel}
       />       
    ) */


export default Connection