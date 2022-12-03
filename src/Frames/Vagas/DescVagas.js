import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity,ScrollView, Modal  } from 'react-native';
import StylesDescVagas from './DescVagasStyles';
import { ModalContato } from '../../Components/Modal/MContato'
import apiDescVaga from './index'


 
 const DescricaoVagas = () =>{
  
  
    /* const   ResumoCurriculo = () => {
        navigation.navigate('Resumo CV')
    }  *

    /* const [visivel, setVisivel]=useState(false) */
 
    const navigation = useNavigation();
    const route = useRoute();

    const [vagaInfo, setVagaInfo] = useState({
        id: route.params.id,
        nomeVaga: route.params.tituloVaga,
        nomeEmpresa: route.params.empresa,
        contratacao: route.params.contratacao,
        periodo: route.params.periodo
    
  })
  

  useEffect(()=>{
    const getDescVagas = async () => {
        let json = await apiDescVaga.getVagaDesc(vagaInfo.id)
        if(json.error == ""){

        }else{
            alert("Erro"+json.error);
        }

    };
        getDescVagas()
    
    },[])
    
    
  
    
    return (
    
    <View>
        
      
        <Text>vaga: {vagaInfo.contratacao}</Text>
        

    </View>
)
}

export default DescricaoVagas

 {/*  <ScrollView>
            <KeyboardAvoidingView style={StylesDescVagas.container}>

                <View style={StylesDescVagas.cabecalho}> 
                    <TouchableOpacity > 
                    <Text style={StylesDescVagas.salvar}  onPress={ResumoCurriculo}>Salvar</Text>

                    
                    </TouchableOpacity> 
                </View>

                <View style={StylesDescVagas.navBar}>
                    <Text style={StylesDescVagas.Titulo}> {'item.editar'} Titulo da vaga</Text>
                    <Text style={StylesDescVagas.NEmpre}> {'item.editar'} nome da empresa</Text>

                </View>
                <View style={StylesDescVagas.Desc}>
                    
                    <View style={StylesDescVagas.ladoAlado}>
                        <Text style={StylesDescVagas.lAltexto}>{'item.editar'} - {'item.editar'}</Text>
                        <Text style={StylesDescVagas.lAltexto}>Sálario R$ {'item.editar'}</Text>
                    </View>

                    <Text style={StylesDescVagas.linha}></Text>
                    

                    <Text style={StylesDescVagas.subTitulo}> Sobre a Vaga</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é</Text>

                    <Text style={StylesDescVagas.subTitulo}>Requisitos</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é</Text>

                    <Text style={StylesDescVagas.subTitulo}>Beneficios</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é</Text>

                    <Text style={StylesDescVagas.subTitulo}>Horarios</Text> 
                    <Text style={StylesDescVagas.textoQuebra}> {'item.editar'} 08:00 ás 17:00  seg a sex
                                                        08:00 ás 17:00 sabado
                                                        08:00 ás 17:00 domingos e feriados </Text>
                    
                    <Text style={StylesDescVagas.subTitulo}> Regime de contratação</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} CLT (efetivo)</Text>

                    <Text style={StylesDescVagas.linha}></Text>

                    <Text style={StylesDescVagas.subTitulo}> Empresa</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} drogasil LTDA</Text>

                    <Text style={StylesDescVagas.subTitulo}> Descrição</Text>
                    <Text style={StylesDescVagas.texto}> {'item.editar'} industria de farmacias</Text>
                   
                </View> 
                <View>

                   <ModalContato/>
                </View>

            </KeyboardAvoidingView>
        </ScrollView>
       */}