import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import { CheckBox } from "./index"; 
import { Share } from "react-native";

 const CheckBoxPage = () => {
    const optionsIndividual = [{
        id: 1 ,
        text:'li e concordo',
    }]
        
         const result = Share.share({
            message: 'React Native | Um framework para construir apps nativos usando React', 
          });

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>check box individual</Text>
            <CheckBox options={optionsIndividual} onChange={op => alert(op)} />
        </View>
    )

    
}

 export default CheckBoxPage
