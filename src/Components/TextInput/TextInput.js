import React from "react";
import {View, Text, StyleSheet, TextInput as RNTextInput} from 'react-native';


export default function TextInput({
    style,
    inputStyle,
    error,
    errorStyle,
    onChange,
    onTouch,
    name,
    maxLength,
    ...attributes
}){
    const onChange2 = text => {
        onChange(name, text);
      };
    const onBlurText = () => {
        onTouch(name);
      };
      return (
        <View style={StyleSheet.flatten([styles.container, style])}>
          <View style={styles.inputContainer}>
            <RNTextInput
              style={StyleSheet.flatten([styles.inputStyle, inputStyle])}
              onChangeText={onChange2}
              onBlur={onBlurText}
              underlineColorAndroid="transparent"
              {...attributes}
            />
           
          </View>
         {error ? (
            <Text style={StyleSheet.flatten([styles.error, errorStyle])}>
              {error}
            </Text>
          ) : null}
        </View>
      );
}

/* Estilo do Forms */

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical: 1,
      paddingHorizontal: 6,

    },
    inputContainer: {
      width:250,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#427AAA',
      borderWidth:2,
      borderRadius:8,
      padding:3,
      textTransform:'uppercase',
      margin:5
    },
    inputStyle: {
      fontSize: 14,
      color:"black",
      height: 40,
      
    },
    error: {
      marginLeft:120,
      color: 'red',
      fontSize: 12,
    },
  });

