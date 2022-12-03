import React , {useState} from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import StylesDescVagas from "../../Frames/Vagas/DescVagasStyles";

    export const ModalContato =() => {

        const [visivel, setVisivel]=useState(false)

        return(
            <View >
                <Modal 
                    transparent={true}
                    animationType={"slide"}
                    visible={visivel}
                >
         
                <View style={StylesDescVagas.link}>

               
                <TouchableOpacity>
                        <Text style={StylesDescVagas.linkTitulo} onPress={()=> {setVisivel(false)}}>Fechar Janela</Text> 
                </TouchableOpacity>

                    <Text style={StylesDescVagas.linkTopic}>Telefone</Text>
                    <Text style={StylesDescVagas.dados}> {'item.editar'} (11) 3003-2580</Text>

                    <Text style={StylesDescVagas.linkTopic}>WhatsApp</Text>
                    <Text style={StylesDescVagas.dados}> {'item.editar'} (11) 9 3003-2580</Text>

                    <Text style={StylesDescVagas.linkTopic}>E-mail</Text>
                    <Text style={StylesDescVagas.dados}> {'item.editar'} reanalize@voacv.com.br</Text>
                </View>

                </Modal>

                <View style={StylesDescVagas.modalLink}>
                    
                    <TouchableOpacity >
                        <Text style={StylesDescVagas.linkTitulo} onPress={()=> {setVisivel(true)}}>Entre em contato</Text> 
                    </TouchableOpacity>
                    

                </View>
            </View>

            
        )
    }

    

    /* erros acertos sair pdf */