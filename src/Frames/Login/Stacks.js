import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./Login";
import ExampleForm from "../ExampleForm/ExemploForm";
import RecuperaSenha from "../RecuperaSenha/ValidaEmail";
import AlteraSenha from "../AlterarSenha/ValidaSenha"; 
import TelaInicial from "../HomePage/Home";


const Stack = createNativeStackNavigator();

export default function Stacks(){
    return(
        <Stack.Navigator initialRouteName="Tela Inicial">
          <Stack.Screen name="Tela Inicial" component={TelaInicial}
          options={{title:'',headerTransparent: true, headerShown: false,}}/> 
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Cadastro" component={ExampleForm}/>
          {/* <Stack.Screen name="Validação de Email" component={RecuperaSenha}/>
          <Stack.Screen name="Alterar Senha" component={AlteraSenha}/> */}
        </Stack.Navigator>
    )
}
export function Home(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tela Inicial" component={TelaInicial}  options={{title:'', headerTransparent: true,headerShown: false,}}/>
    </Stack.Navigator>
  )
}
export function CadUser(){
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={ExampleForm}/>
      </Stack.Navigator>
}