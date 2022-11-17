import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import { styleInicial } from "../Frames/HomePage/StyleHome";
import { StyleSheet } from "react-native";

export const url = '';

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
            
            <View>
                {items.map((item) => (
                    <View style={styleInicial.item}>
                        {/* renderizando id's do banco de dados */}
                        <>
                        {
                           <View>
                                <Text> {item.nome}</Text>
                                <Text> {item.email}</Text>
                            </View> 
                        }
                        </>
                        <TouchableOpacity 
                        onPress={ () => changeRT("todos")}
                        
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

            </View>     
        </ScrollView>

    )
}
export default Connection