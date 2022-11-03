
import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar,ScrollView  } from 'react-native';

/* import IconLogoP from '../../assets/logoPrincipalG'; */

import styleAltCad from './Styles';

export default class AlteraCad extends Component{
    render(){
    return (
        <ScrollView>
            <KeyboardAvoidingView style={styleAltCad.background}>
                <StatusBar style='auto'/>
                    <View style={styleAltCad.ContainerLogo}>
                    {/* <IconLogoP style={styleLogin.Logo} fill="black" width={250} height={250}></IconLogoP> */}
                    </View>

                    <View style={styleAltCad.container}>
                        <Text style={styleAltCad.textInput}>Nome Completo</Text>
                        <TextInput style={styleAltCad.input} autoCorrect={false} />
    
                        <Text style={styleAltCad.textInput}>E-mail</Text>
                        <TextInput style={styleAltCad.input} autoCorrect={false} onChangeText={()=> {}} />
                        
                        <TouchableOpacity style={styleAltCad.btAcessar}>
                            <Text style={styleAltCad.botao}>Alterar</Text>
                        </TouchableOpacity>                    
                </View>              
            </KeyboardAvoidingView>
        </ScrollView>   
        )
    };
}