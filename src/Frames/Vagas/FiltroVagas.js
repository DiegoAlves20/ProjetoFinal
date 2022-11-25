import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import styleFiltro from '../Vagas/FiltroStyles'

export default function Filtro() {

 /*   const DescricaoVagas = () => {
    navigation.navigate('Filtro')
} 
 */
/* 
    url geral = / "fpkewpfj/api/"filtro" "


    resorceType()

      selectPicker = {nomeVaga}

      selectPicker = {estadoVaga}

      ...




    setTUDO

*/

const [area] = useState(['Selecione', 'Tecnologia', 'TecnologiaJava'])

const [vaga, setVaga]= useState([])
const [estadoVaga, setEstadoVaga] = useState([])
 


  const [areaSelecionado, setAreaSelecionado] = useState([])
  return (
    <ScrollView>

      <View style={styleFiltro.container}>

      <Text style={styleFiltro.titulo}>Filtros</Text>

      <View style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Área de interesse</Text>
        
        
         <Picker style={styleFiltro.picker}

          selectedValue={areaSelecionado}
          onValueChange={(itemValue) =>
            setAreaSelecionado(itemValue)}
          >
            {
              area.map(cr => {
                return(
                      <Picker.Item label={cr} value={cr}/>
                )
              
              })
            }
        </Picker>

        <View>
          <Text>o input selecionado foi: {areaSelecionado}</Text>
        </View> 
      </View>
{/* 
      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Estado</Text>
        
        
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'} />
          <Picker.Item label='São Paulo' value={'SaoPaulo'} />
          <Picker.Item label='Minas' value={'Minas'} />
        </Picker>


      </View>
      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Cidade</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'}/>
          <Picker.Item label='Cotia' value={'Cotia'} />
          <Picker.Item label='Osasco' value={'Osasco'} />
        </Picker>
      </View>

      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Tipo de contratação</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'} />
          <Picker.Item label='CLT' value={'CLT'} />
          <Picker.Item label='Estagio' value={'Estagio'} />
        </Picker>
      </View>

     
      <View  style={styleFiltro.select}>
        <Text style={styleFiltro.texto}>Método de trabalho</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label='Selecione' value={'Selecione'}/>
          <Picker.Item label='Presencial' value={'Presencial'} />
          <Picker.Item label='Remoto' value={'Remoto'} />
          <Picker.Item label='Hibrido' value={'Hibrido'} />
        </Picker>
        </View>*/}

   {/*  <Text style={styleFiltro.textoFiltro}>Exibir somente vagas recentes </Text>

      <TouchableOpacity style={styleFiltro.btAcessar}>

        <Text style={styleFiltro.botao} onPress={DescricaoVagas}>Aplicar</Text>


      </TouchableOpacity>
  */}
      </View>


    </ScrollView>
  )
}


/* MUDAR A ESTRUTURA DE FILTRO OU TENTAR ACHAR UMA SOLUÇÃO PRA CONECTAR NO BANCO DE DADOS (VIDEOS)
  ARRUMAR A FORMATAÇÃO 
  FAZER A LOGICA COM O BANCO DE DADOS
  POPULAR COM OS DADOS DOS FILTROS
   */