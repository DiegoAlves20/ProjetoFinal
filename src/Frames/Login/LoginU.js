import React, {useEffect, useState, useContext} from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StatusBar, ScrollView  } from 'react-native';
import styleLogin from './Style';
import axiosLogin from "../../routes/axios"
import { Context } from '../../context/authContext';
/* import Icon from  'react-native-vector-icons/Feather'; */


export default function LoginUsuario({ navigation }) {
  const state = useContext(Context) 
  console.log(state)
  
    useEffect(() =>{
        navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
    },[])

    const handleGoToForm = () => {
        navigation.navigate("Cadastro")
    }
    const handleGoToEsqueceuSenha = () => {
        navigation.navigate("Validação de Email")
    } 

   
     var [senhaU, setSenhaU] = useState(null)
     var [cpfU, setCpfU] = useState(null)

    const SingIn = async  () =>{
       
        try{
        const login = await axiosLogin.post('/usuario', {
            email:senhaU,
            cpf: cpfU,
        }).then(({response}) => console.log(JSON.stringify(response)))
        }catch (error) {
            console.log(error.response)
        }
          console.log(cpfU + senhaU );
    
       
    }
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView style={styleLogin.background}>
                    {/* <Icon name="activity" size={20}/> */}

                    <StatusBar style='auto' />
                    <View style={styleLogin.ContainerLogo}>
                        <Image style={styleLogin.Logo}
                            source={require('../../assets/logoPrincipalG.png')}
                        />
                    </View>
                    <View style={styleLogin.container}>
                        <Text style={styleLogin.textInput}>
                            CPF
                        </Text>
                        <TextInput style={styleLogin.input}
                            placeholder="Insira seu CPF"
                            autoCorrect={false}
                            onChangeText={value => setCpfU(value)}
                        />
                        <Text style={styleLogin.textInput}>
                            Senha
                        </Text>
                        <TextInput style={styleLogin.input}
                            placeholder="Insira sua Senha"
                            autoCorrect={false}
                            onChangeText={value => setSenhaU(value)}
                        />

                        <TouchableOpacity >
                            <Text style={styleLogin.link} >
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styleLogin.btAcessar}
                        >
                            <Text style={styleLogin.botao} onPress={ () =>{ 
                                navigation.getParent().setOptions({tabBarStyle: {display: 'flex'}})
                                navigation.navigate("Tela Inicial")
                                
                            }}>Acessar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={styleLogin.link} onPress={handleGoToForm}>Não tem conta? Cadastre-se</Text>
                        </TouchableOpacity>

                        <View style={styleLogin.linha}></View>{/* <View style={{height:90,width:'100%',backgroundColor:'red',position:'absolute',bottom:-40,zIndex:999}}><Text>OLA</Text></View> */}

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            
        </View>
    )
}