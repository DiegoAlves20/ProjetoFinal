import React from "react";
import { Text, View, TextInput, ScrollView, FlatList, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import { Filtrar, Lupa } from "../../Components/icons";
import { styleInicial } from "../HomePage/StyleHome";
import { ListaRenderVagas } from "./ListaVagas";



export default function Vaga({navigation}){
    
 /* add */   const Filtros = () => {
        navigation.navigate('filtro')
    } 
        return(
            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView>
                    <View style={styleInicial.viewBlue}></View>
                    <View style={styleInicial.ViewSearch}>
                        <TextInput
                            style={styleInicial.inputSearch}
                            placeholder="Pesquisar"
                            placeholderTextColor={'rbga(0,0,0, 0.7)'}>
                        
                        </TextInput>
                       
                           <Lupa></Lupa>
            <View style={styleInicial.iconFilter}>
                            <TouchableOpacity  onPress={Filtros} >
                                <Filtrar></Filtrar>
                            </TouchableOpacity>
                            
                            
                        </View>
                    </View>
                    <Text style={styleInicial.tituloFiltroVaga}>Vagas: {'TI'} - {'SP'} - {'Cotia'}</Text>
                    <ListaRenderVagas />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
}