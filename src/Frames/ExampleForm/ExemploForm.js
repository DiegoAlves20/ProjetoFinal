import React, { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView, Image, Button, Keyboard} from 'react-native';
import {Formik} from 'formik';
import TextInput from '../../Components/TextInput/TextInput'
import validation from '../../../validation';

import axiosApi from '../../routes/axios'



function ExampleForm({onSubmit, initialValues, navigation}) {
   const handleGoToLogin = () => {
    navigation.navigate("Login")
  } 

    const [nomeU, setNomeU] = useState(null)
    const [emailU, setEmailU] = useState(null)
    const [cpfU, setCpfU] = useState(null)
    const [senhaU, setSenhaU] = useState(null)
    const [confirmarSenhaU, setConfirmarSenhaU] = useState(null)


    const Post = async () => {

      try {
        const response = await axiosApi.post('/usuario', {
          nome: nomeU,
          email:emailU,
          cpf: cpfU,
          senha: senhaU,
          confirmaSenha: confirmarSenhaU
        }).then(({response}) => console.log(JSON.stringify(response)))
        return "usuario cadastrado"
      } catch (error) {
        console.log(error.response)
      }
      console.log(nomeU + emailU + cpfU + senhaU );
    }

    const renderForm = ({
      values,
      setFieldValue,
      setFieldTouched,
      touched,
      errors,
      handleSubmit,
      isValid,
      isSubmitting,
    
    }) => {
      return (
        <View style={styles.container}> 
    
        <ScrollView style={styles.scrollbar} showsVerticalScrollIndicator={false}>
          <Image source={require('../../assets/logoPrincipalG.png')} style={styles.image}/>
             
               
        
         {/* Nome completo do Usuario */}
      

        <Text style={styles.text}>Nome completo</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Digite seu nome completo"}
            name="name"
            onChangeText={value => setNomeU(value)}
            /* value={values.name} */
            /* error={touched.name && errors.name} */
          />
        {/* Email */}
        <Text style={styles.text}>Email</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder={"Digite seu Email"}
            name="email"
            onChangeText={value => setEmailU(value)}
          /*   value={values.email} */
           /*  error={touched.email && errors.email} */
           
          />
          {/* CPF */}
          <Text style={styles.text}>CPF</Text>
           <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"CPF"}
            name="cpf"
            keyboardType='numeric'
            onChangeText={value => setCpfU(value)}
            /* value={values.cpf} */
            /* error={touched.cpf && errors.cpf} */
          /> 
          {/* Senha */}
          <Text style={styles.text}>Senha</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Nova Senha"}
            name="password"
            secureTextEntry={true}
            onChangeText={value => setSenhaU(value)}
            /* value={values.senha} */
            /* error={touched.senha && errors.senha} */
          />
          {/* Confirmar Senha */}
          <Text style={styles.text}>Confirmar Senha</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Senha igual a anterior"}
            name="confirmarSenha"
            secureTextEntry={true}
            onChangeText={value => setConfirmarSenhaU(value)}
           /*  value={values.confirmarSenha} */
            /* error={touched.confirmarSenha && errors.confirmarSenha} */
          />

          {/* lgpd */}


                 {/* Enviar Formulario */}
          <TouchableOpacity
            disabled={!isValid || isSubmitting}
            onPress={()=>{
              Keyboard.dismiss +
              handleSubmit +
              Post() +
              handleGoToLogin()
              
             
            }}
            style={StyleSheet.flatten([
              styles.submit,
              !isValid ? styles.submitDisabled : null,
            ])}>
            <Text style={styles.submitText} >Cadastrar</Text>
          </TouchableOpacity>
            <Text style={styles.fazerLogin} onPress={handleGoToLogin}>
              Fazer Login
            </Text>
          </ScrollView>
           
         </View>
      );
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={renderForm}
        /* validationSchema={validation} */
      />
    );

    
  }
  


  ExampleForm.defaultProps = {
    initialValues: {},
    onSubmit: () => null,
  };
  
 

  const styles = StyleSheet.create({
    
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFF'
    },
    submit: {
      width:125,
      height: 53,
      flex:1,
      backgroundColor:'#ed7a11',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:145,
      marginVertical:20, 
      borderRadius:8
    },
    submitText: {
      fontSize: 18,
      color:'white',
    },
    submitDisabled: {
      backgroundColor: 'transparent',
    },
    text:{
      fontSize:16,
      marginTop:20,
      color:'black',
      alignItems:'center',
      marginLeft:85,
    },
    fazerLogin:{
     fontSize:13,
     width:200,
     marginLeft:170,
     color:'black',
     
    },
    image:{
      width:200,
      height:200,    
      marginTop:30,
      marginBottom:30,
      marginHorizontal:95
    }

    

  });
  
  
  export default ExampleForm;