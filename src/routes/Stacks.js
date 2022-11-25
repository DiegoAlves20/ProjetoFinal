import React, {useEffect}from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleForm from "../Frames/ExampleForm/ExemploForm";
import RecuperaSenha from "../Frames/RecuperaSenha/ValidaEmail";
import AlteraSenha from "../Frames/AlterarSenha/ValidaSenha"; 
import TelaInicial from "../Frames/HomePage/Home";
import Vaga  from "../Frames/Vagas/Vagas";
import Fav from "../Frames/Favoritos/Favs";
import Perfil from "../Frames/Perfil/Perfi";
import Filtro from "../Frames/Vagas/FiltroVagas";
import { Menu } from "../Frames/Menu";
import AlteraCad from "../Frames/alteraCad/AltCad";
import ResumoCurriculo from "../Frames/Perfil/Curriculo/ResumoCV";
import { CadCVPessoal } from "../Frames/Perfil/Curriculo/CadCVPessoal/CadCVPes";
import LoginUsuario from "../Frames/Login/LoginU";
import Box from "./shareds";
import DescricaoVagas from "../Components/Modal/MDescVagas";
import { ListaRender } from "../Components/ListaVagaRecente";
const Stack = createNativeStackNavigator();


function Log({navigation}) {
  useEffect(() =>{
    navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
    return(
      navigation.getParent().setOptions({tabBarStyle: {display: 'flex'}})
    )
  },[])
}


export function Logi() {
  return(
    <Stack.Navigator initialRouteName="login">

      <Stack.Screen name="Login" component={LoginUsuario} options={{title:'',headerTransparent: true,headerShown: false,}}/>
      <Stack.Screen name="Alterar Senha" component={AlteraSenha} options={{title:'',headerTransparent: true,headerShown: false,}}/>
      <Stack.Screen name="Validação de Email" component={RecuperaSenha} />
      <Stack.Screen name="Cadastro" component={ExampleForm} options={{title:'',headerTransparent:true,headerShown: false,}}/>
      </Stack.Navigator>

  )
}

 export function Home(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tela Inicial" component={TelaInicial} options={{title:'',headerTransparent: true,headerShown: false,}}/>
      <Stack.Screen name="LR" component={LR} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Login" component={LoginUsuario} />
    </Stack.Navigator>
)}

/* function LR() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Descricao da vaga" component={ListaRender} />
    </Stack.Navigator>
  )
} */
export function Vagas(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="vaga" component={Vaga} options={{title:'Vaga',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="filtro" component={Filtro} options={{title:'Filtro',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="Login" component={LoginUsuario} options={{title:'',headerTransparent: true,headerShown: false,}}/>
    </Stack.Navigator>
)}
export function Favoritos(){
  return( 
    <Stack.Navigator>
      <Stack.Screen name="Favorito" component={Fav} options={{title:'Favoritos',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="Login" component={LoginUsuario} options={{title:'',headerTransparent: true,headerShown: false,}}/>
   </Stack.Navigator>
)}
export function Perfils(){
  return( 
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{title:'Perfil',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="AltCad" component={AlteraCad} options={{title:'ALtera Cad',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="ResCV" component={ResumoCurriculo} options={{title: 'Resumo do Curriculo',headerTransparent: true, headerShown: false,}}/>
      <Stack.Screen name="AlterSenha" component={AlteraSenha} options={{title:'',headerTransparent: true,headerShown: false,}}/>
      <Stack.Screen name="Editar dados cadastrais" component={CadCVPessoal} options={{title:'Editar CV Pessoal', headerTransparent: true,headerShown: false }}/> 
      <Stack.Screen name="Editar dados profissionais" component={CvProf} options={{title:'Editar CV Profissional', headerTransparent: true,headerShown: false }}/> 
      <Stack.Screen name="Login" component={LoginUsuario} options={{title:'',headerTransparent: true,headerShown: false,}}/>
   </Stack.Navigator>
)}








