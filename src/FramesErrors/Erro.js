import React from 'react';
import { Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

export const ErroGeral = ({navigation}) => {
return(
    <View>
        <TouchableOpacity onPress={()=> {navigation.navigate("ConfirmarSenha")}}>
            <Text>Senhas não conrrespondem</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.navigate("ErrosNetwork")}>
            <Text>Erro Network</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.navigate("Padrao")}>
            <Text>Padrao</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.navigate("Pesquisa")}>
            <Text>Pesquisa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigation.navigate("Usuario&Senha")}>
            <Text>Usuario e Senha Incorretos</Text>
        </TouchableOpacity>
    </View>
    );
}