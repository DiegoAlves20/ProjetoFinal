import React from "react";
import {View, Text, ScrollView} from 'react-native';
import { styleInicial } from "../HomePage/StyleHome";
import { ListaRenderFav } from "./ListaFav";

export default function Fav(){
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styleInicial.viewBlueFav}>
                    <Text style={{fontSize:25,color:'white'}}>Favoritos</Text>
                    <Text style={{fontSize:20,color:'white',paddingTop:15,paddingBottom:10}}>{'Vagas que voce salvou'}</Text>
                </View>
                <ListaRenderFav />
            </ScrollView>
        </View>
    )
}