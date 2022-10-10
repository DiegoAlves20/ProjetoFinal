import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar, ScrollView  } from 'react-native';

import styleSenha from './Style';

export default function AlteraSenha() {
    
        return(
            <ScrollView>
            <KeyboardAvoidingView style={styleSenha.background}>
                <StatusBar style='auto'/>
                <View style={styleSenha.ContainerLogo}>
                    
                    <Image style={styleSenha.Logo}
                        source={require('../../assets/logoPrincipalG.png')}

                    />
                </View>

                <View style={styleSenha.containerText}>
                    
                    <Text style={styleSenha.textTitulo}>
                        Cadastre a sua nova senha.
                    </Text>
                    
                </View>
                <View style={styleSenha.containerInput}>
                    <Text style={styleSenha.textInput}>
                        Nova Senha
                    </Text>
                    <TextInput style={styleSenha.input}
                        placeholder="Informe o email cadastrado"
                        onChangeText={()=>{}}
                
                    >
                        
                    </TextInput>
                    <Text style={styleSenha.textInput}>
                         Confirmar a nova senha
                    </Text>
                    <TextInput style={styleSenha.input}
                        placeholder="Informe o email cadastrado"
                        onChangeText={()=>{}}
                    > 
                    </TextInput>
                    <TouchableOpacity>
                    <Text style={styleSenha.botao}>Aletrar</Text>
                </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
            </ScrollView>
        )
    
}