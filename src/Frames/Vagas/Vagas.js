import React from "react";
import { Text, View, TextInput, ScrollView, FlatList, KeyboardAvoidingView } from "react-native";
import { styleInicial } from "../HomePage/StyleHome";
import { ListaRenderVagas } from "./ListaVagas";


export default function Vaga(){
        return(
            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <KeyboardAvoidingView>
                    <View style={styleInicial.viewBlue}></View>
                    <View style={styleInicial.ViewSearch}>
                        <TextInput 
                            style={styleInicial.inputSearch}
                            
                            placeholder="Pesquisar"
                            placeholderTextColor={'rbga(0,0,0, 0.7)'}
                        />
                        <View style={styleInicial.iconFilter}></View>
                    </View>
                    <Text style={styleInicial.tituloFiltroVaga}>Vagas: {'TI'} - {'SP'} - {'Cotia'}</Text>
                    <ListaRenderVagas />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
}