 import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favoritos, Home, Index, Log, Logi, Perfils, Vagas, } from "./Stacks";
import TelaInicial from "../Frames/HomePage/Home";


const Tab = createBottomTabNavigator();

export default function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={
        {
          tabBarInactiveBackgroundColor: "#427AAA",
          tabBarActiveBackgroundColor: "#ed7a11",
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "white",
          tabBarIconStyle: { marginTop: 4},
          tabBarLabelStyle: { fontSize: 13, color: 'black', paddingBottom: 3},
          tabBarStyle: {height: 65},
          style: { borderColor: '#011f3b'},
          headerShown: false,
          unmountOnBlur: true,
        }
      }
    >
      
      <Tab.Screen name="log" component={Logi}           options={{ headerTransparent: true, headerShown: false,}} />
      <Tab.Screen name='Tela Inicial' component={Home}  options={{ headerTransparent: true, headerShown: false,}} />
      <Tab.Screen name='Vaga' component={Vagas}         options={{ headerTransparent: true, headerShown: false, tabBarVisible: false}}/>
      <Tab.Screen name='Favorito' component={Favoritos} options={{ headerTransparent: true, headerShown: false,}}/>
      <Tab.Screen name='Perfil' component={Perfils}     options={{ headerTransparent: true, headerShown: false,}}/>
    </Tab.Navigator>
  )
}
