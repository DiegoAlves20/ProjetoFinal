import React, { useState, useCallback, useEffect } from 'react';
import {Text, TextInput, View, ScrollView, Button, TouchableOpacity } from 'react-native';

import styles from "./stylesCVP";
import DateTimePickerModal from  "react-native-modal-datetime-picker";


interface IAdress {
  cep?: string,
  logradouro?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
}



export function CadCVPessoal({navigation}) {
  
  const handleGoToBack = () =>{
      navigation.goBack();
  }
 
 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
    
  const [adress, setAdress] = useState<IAdress>({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: ''
  }); 
  const getAdressFromApi = useCallback(() => {
    fetch(`https://viacep.com.br/ws/${adress.cep}/json/`)
    .then(res => res.json())
    .then((data: IAdress) => setAdress({
      bairro: data.bairro,
      localidade: data.localidade,
      logradouro: data.logradouro,
      uf: data.uf
    })).catch(err => console.log('Cep não encontrado', err))
  }, [adress.cep])

  return (
    <ScrollView>
      {/* stack goBack */}
      <View><Text onPress={handleGoToBack}> Voltar </Text></View>

      {/* button -> toucheable opacity com icon */}
      <Button title="Select a date" onPress={showDatePicker}/>
      <Text style={{
        fontSize:26,
        color:'black',
        borderBottomWidth:2,
        borderBottomColor:'#ED7A11',
        
        width:205,
        marginHorizontal:100
      }}>
        Dados Pessoais
      </Text>
      
        
     
    <View style={styles.container}>
      
      <View style={styles.form}>
        {/* <Icon name='RightOutlined' size={24}> */}
        <Text style={styles.label}>Nascimento</Text>
          <TextInput 
          style={styles.input}
          editable={false}
          >{selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</TextInput>
        
       
       <Text  style={styles.label}>Estado Civil</Text>
       <TextInput 
          style={styles.input}   
       />
       <Text  style={styles.label}>Telefone</Text>
       <TextInput 
       placeholder="00 0000-0000"
       placeholderTextColor={'rgba(0,0,0, 0.6)'}
       keyboardType='number-pad'
          style={styles.input}   
       />
       <Text  style={styles.label}>Celular</Text>
       <TextInput 
       placeholder="(  ) 0 0000-0000"
       placeholderTextColor={'rgba(0,0,0, 0.6)'}
       keyboardType='number-pad'
          style={styles.input}   
       />

        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
      <Text style={{fontWeight:'normal',fontSize:24,color:'black',marginHorizontal:100}}>Endereço</Text>
       <Text style={styles.label}>CEP</Text>
        <TextInput
          maxLength={8}
          style={styles.input}
          keyboardType='numeric'
          onEndEditing={() => getAdressFromApi()}
          onChangeText={(text) => 
          setAdress((old) => ({ 
            ...old, cep: text,
          })    
           
        )}
         value={adress.cep}
        />
        <Text style={styles.label}>UF</Text>
        <TextInput
          style={styles.input}
          value={adress.uf}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            uf: text
          }))}
        /> 
        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          value={adress.localidade}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            localidade: text
          }))}
        />
        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          value={adress.bairro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            bairro: text 
          }))}
        />
        <Text style={styles.label}>Rua</Text>
        <TextInput
          style={styles.input}
          value={adress.logradouro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            logradouro: text
          }))}  
        />
          <TouchableOpacity style={styles.btnEnviar}>
             <Text style={styles.btnEnviarTitle}>Salvar</Text>
          </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  );
}