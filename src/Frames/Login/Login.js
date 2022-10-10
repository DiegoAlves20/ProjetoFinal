import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar, ScrollView  } from 'react-native';

import styleLogin from './Style';

export default function Login({ navigation }) {
    const handleGoToForm = () => {
        navigation.navigate("Cadastro")
    }
    const handleGoToEsqueceuSenha = () => {
        navigation.navigate("Validação de Email")
    }

    return (
        <View>
            <ScrollView>
                <KeyboardAvoidingView style={styleLogin.background}>
                    <StatusBar style='auto' />
                    <View style={styleLogin.ContainerLogo}>
                        <Image style={styleLogin.Logo}
                            source={require('../../assets/logoPrincipalG.png')}
                        />
                    </View>
                    <View style={styleLogin.container}>
                        <Text style={styleLogin.textInput}>
                            Login
                        </Text>
                        <TextInput style={styleLogin.input}
                            placeholder="Insira seu CPF"
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />
                        <Text style={styleLogin.textInput}>
                            Senha
                        </Text>
                        <TextInput style={styleLogin.input}
                            placeholder="Insira sua Senha"
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />

                        <TouchableOpacity >
                            <Text style={styleLogin.link} onPress={handleGoToEsqueceuSenha}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styleLogin.btAcessar}>
                            <Text style={styleLogin.botao} >Acessar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={styleLogin.link} onPress={handleGoToForm}>Não tem conta? Cadastre-se</Text>
                        </TouchableOpacity>

                        <View style={styleLogin.linha}></View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}