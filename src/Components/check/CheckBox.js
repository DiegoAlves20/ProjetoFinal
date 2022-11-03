import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { CheckBox } from "./index"; 

 const CheckBoxPage = () => {
    const optionsIndividual = [{
        id: 1 ,
        text:'li e concordo',
    }]

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>check box individual</Text>
            <CheckBox options={optionsIndividual} onChange={op => alert(op)} />
        </View>
    )
}
 export default CheckBoxPage
