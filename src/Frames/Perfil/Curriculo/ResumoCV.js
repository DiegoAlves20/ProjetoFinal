
import React, {useEffect} from 'react';
import { View, KeyboardAvoidingView,  Text,  TouchableOpacity, ScrollView } from 'react-native';
import { StylesResumoCV } from './StyleRSCV';
import { Icon } from 'react-native-vector-icons/Icon';
import { Exportar } from '../../../Components/icons';

export default function ResumoCurriculo({navigation}) {
    const handleGoBack = () => {
        navigation.goBack();
        navigation.getParent().setOptions({tabBarStyle: {display: 'flex'}})
    }

    useEffect(() =>{
        navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
    },[])

    return (
        <ScrollView>
            <Text onPress={handleGoBack}>Voltar</Text>
            <KeyboardAvoidingView style={StylesResumoCV.container}>
            <View style={StylesResumoCV.corpo}>
                <Text style={StylesResumoCV.titulo}> {'item.nome'} Nome do Aluno</Text>
                <Text style={StylesResumoCV.linha}></Text>
                <View style={StylesResumoCV.item}>

                    <Text style={StylesResumoCV.dados}> {'item.estadoCivil'} civil</Text>
                    <Text style={StylesResumoCV.dados}> Data de nascimento:  {'item.datanasc'} 00/00/0000</Text>
                    
                    <Text 
                    style={StylesResumoCV.subTitulo}>Endereço</Text>
                    <Text style={StylesResumoCV.dados}> {'item.endereco'} - {'item.numero'}  Nome da rua - 0000</Text>
                    <Text style={StylesResumoCV.dados}> {'item.complemento'},{'item.bairro'} complemento, Bairro</Text>
                    <Text style={StylesResumoCV.dados}> Cidade-UF {'item.cidade'}-{'item.uf'} /  CEP: 0000-000 {'item.cep'} </Text>

                    <Text style={StylesResumoCV.subTitulo}>Contato</Text>
                    <Text style={StylesResumoCV.dados}> {'item.email'}Email: texto@gmail.com</Text>
                    <Text style={StylesResumoCV.dados}> Telefone:{'item.telefone'} (00) 0000-0000 / Celular: {'item.celular'}(00) 0 0000-0000</Text>
                    
                    
                    <TouchableOpacity style={StylesResumoCV.botao} onPress={() =>{
                        /* navigation.getParent().setOptions({tabBarStyle: {display: 'flex'}}) */
                        navigation.navigate("Editar dados cadastrais")}
                        }>
                        <Text style={StylesResumoCV.editarDados}>Editar dados pessoais</Text>
                    </TouchableOpacity>
                
                </View>

                <View  style={StylesResumoCV.item}>
                    
                    <Text style={StylesResumoCV.subTitulo}>Objetivo</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  Busco uma oportunidade em uma area de trabalho onde eu possa colocar minhas habilidades em pratica.</Text>
                    
                    <Text style={StylesResumoCV.subTitulo}>Formação </Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  Nome do curso</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  Nome da escola</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  cidade-  {'item.Editar'}  UF</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  00/00/0000 até  {'item.Editar'}  00/00/0000</Text>

                    <Text style={StylesResumoCV.subTitulo}>Idiomas</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  nome do idioma - nivel</Text>
                    
                    <Text style={StylesResumoCV.subTitulo}>Experiencias Profissionais</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  nome da empresa</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  cargo</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  Area profissional</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  cidade- {'item.Editar'}  UF</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  00/00/0000 até  {'item.Editar'}  00/00/0000</Text>
                    <Text style={StylesResumoCV.dados}>Principais atividades</Text>
                    <Text style={StylesResumoCV.dados}> {'item.Editar'}  descricao do que foi feito no trabalho</Text>
                    
                    <TouchableOpacity style={StylesResumoCV.botao} onPress={() => navigation.navigate('Editar dados profissionais')}>
                        <Text style={StylesResumoCV.editarDados}> {'item.Editar'}  Editar dados Profissionais</Text>
                    </TouchableOpacity>
                
                </View>

                    <TouchableOpacity style={StylesResumoCV.link} onPress={() => {}}>
                        <Text style={StylesResumoCV.linkExpo}> 
                        <Exportar></Exportar>
                        Exportar Curriculo</Text>
                    </TouchableOpacity>



            </View>

                   
            </KeyboardAvoidingView>
        </ScrollView>
)}