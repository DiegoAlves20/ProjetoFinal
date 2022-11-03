import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView, Image} from 'react-native';
import {Formik} from 'formik';
import TextInput from '../../Components/TextInput/TextInput';
import validation from '../../../validation';
import Forms from '../../../FormJson';



function ExampleForm({onSubmit, initialValues, navigation}) {
   const handleGoToLogin = () => {
    navigation.navigate("Login")
  } 
  /* fetch('http://10.92.198.19:8080/usuario',{
    method:'POST',
    headers:{
      Accept: 'application/json', 'Content-Type' : 'application/json'
    },
    body: JSON.stringify({})

    .then(resposta => resposta.json())
    .then( (json) => console.log(json))
    .catch((error) => console.error(error))

  });
 */

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
            value={values.name}
            error={touched.name && errors.name}
          />
        {/* Apelido */}
        <Text style={styles.text}>Apelido</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Como voce quer ser chamado"}  
            name="apelido"
            value={values.apelido}
            error={touched.apelido && errors.apelido}
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
            value={values.email}
            error={touched.email && errors.email}
            placeholderTextColor="red"
          />
          {/* CPF */}
          <Text style={styles.text}>CPF</Text>
           <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"CPF"}
            name="cpf"
            keyboardType='numeric'
            value={values.cpf}
            error={touched.cpf && errors.cpf}
          /> 
          {/* Senha */}
          <Text style={styles.text}>Senha</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Nova Senha"}
            name="password"
            secureTextEntry={true}
            value={values.senha}
            error={touched.password && errors.password}
          />
          {/* Confirmar Senha */}
          <Text style={styles.text}>Confirmar Senha</Text>
          <TextInput
            onChange={setFieldValue}
            onTouch={setFieldTouched}
            placeholder={"Senha igual a anterior"}
            name="passwordConfirm"
            secureTextEntry={true}
            value={values.passwordConfirm}
            error={touched.passwordConfirm && errors.passwordConfirm}
          />
        
        <Text style={{marginLeft:80}}>Li e estou de acordo com o <Text style={{color:'blue'}} >Termo de uso {'\n'}e Politica de Privacidade</Text></Text>
          {/* Enviar Formulario */}
          <TouchableOpacity
            disabled={!isValid || isSubmitting}
            onPress={handleSubmit}
            style={StyleSheet.flatten([
              styles.submit,
              !isValid ? styles.submitDisabled : null,
            ])}>
            <Text style={styles.submitText}>Cadastrar</Text>
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
        validationSchema={validation}
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
      backgroundColor:'black',
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