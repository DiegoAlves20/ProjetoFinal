import React from "react";
import { Text, View, Image, Touchable, TouchableOpacity } from "react-native";

import { stylesPerfil } from "./Style";
export default function Perfil({navigation}){

    const handleGoToAlterSenha = () => {
        navigation.navigate("Validação de Email")
    }

    return(
        <View  style={stylesPerfil.container}>
            <View style={stylesPerfil.viewBluePerfil}>
                 <Text style={{fontSize:28,color:'white',textAlign:'center',marginVertical:25}}>{'Nome da pessoa'}</Text>
            </View>

            <View>
                <Image
                    source={require('../../assets/fotoPerfil.png')}
                    style={{width:150,height:150,marginHorizontal:70}}
                />
                <TouchableOpacity>
                    <Text style={{textAlign:'center',fontSize:18}}>Alterar foto</Text>
                </TouchableOpacity>

                <View style={stylesPerfil.viewInfoPerfil}>
                    <Text style={stylesPerfil.info}>{'Lucas Melo Silveira'}</Text>
                    <Text style={stylesPerfil.info}>{'joaozinho0@gmail.com'}</Text>
                    <Text style={stylesPerfil.info}>{'Cpf: 123.456.789-10'}</Text>
                </View>

                <View style={stylesPerfil.viewBtn}>
                    <TouchableOpacity 
                    onPress={
                        () =>{
                            navigation.getParent().setOptions({tabBarStyle: {display: 'flex'}})
                            navigation.navigate("AltCad")
                            return(
                                navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
                
                            )
                        }
                    }>
                        <Text style={{fontSize:18,padding:2,color:'white',textAlign:'center'}}>

                            Alterar Dados Cadastrais
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign:'center',fontSize:18,marginTop:5}} onPress={()=> {navigation.navigate("AlterSenha")}} >Alterar Senha</Text>
                <TouchableOpacity onPress={() =>{navigation.navigate("ResCV")}}
                style={{fontSize:18,padding:2,backgroundColor:'#427AAA',width:220,padding:15,borderRadius:8,marginHorizontal:40}}>
                    <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Visualizar curriculo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}