import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styleInicial } from "../../Frames/HomePage/StyleHome";


const Details = ({vaga}) => {


    


    const navigation = useNavigation();

    const handleGoToMenu = () => {
      navigation.navigate("DescVagas", {
          id: vaga.id,
          nomeVaga: vaga.tituloVaga,
          nomeEmpresa: vaga.empresa,
          contratacao: vaga.contratacao,
          periodo: vaga.periodo
      });
  } 

   return(
        <TouchableOpacity style={styleInicial.btn}>
                    <Text onPress={handleGoToMenu} style={{fontSize:16, textAlign:'center', color:'white'}}>Ver detalhes</Text>
        </TouchableOpacity>
   )
}
export default Details;