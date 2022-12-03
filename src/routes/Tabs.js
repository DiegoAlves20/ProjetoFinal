 import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favoritos, Home, Logi, Perfils, Vagas, } from "./Stacks";


import { PaginaInicial, Perfil, Vaga, Favorito } from "../Components/icons"; /* add */

import { View } from "react-native";



const Tab = createBottomTabNavigator();

export default function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={
        {
          tabBarInactiveBackgroundColor: "#427AAA",
          tabBarActiveBackgroundColor: "#ed7a11",
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "#000",
          tabBarIconStyle: { marginTop: 4},
          tabBarLabelStyle: { fontSize: 13, color: 'white', paddingBottom: 3},
          tabBarStyle: {height: 65},
          style: { borderColor: '#011f3b'},
          headerShown: false,
          unmountOnBlur: true,

        }
      }
    > 
      
      <Tab.Screen name='Tela Inicial' component={Home}          options={{ headerTransparent: true, headerShown: false,
      
      tabBarIcon : ()=>{
        return(
          <View>
            <PaginaInicial/>
          </View>
        )
       } 
      }} />
      <Tab.Screen name='vaga' component={Vagas}                 options={{ headerTransparent: true, headerShown: false, tabBarVisible: false,
       tabBarIcon : ()=>{
        return(
          <View>
            <Vaga/>
          </View>
        )
       } 
      
      }}/>
      <Tab.Screen name='Favorito' component={Favoritos}         options={{ headerTransparent: true, headerShown: false,
      
       tabBarIcon : ()=>{
        return(
          <View>
            <Favorito/>
          </View>
        )
       } 
      
      }}/>
      <Tab.Screen name='Perfil' component={Perfils}             options={{ headerTransparent: true, headerShown: false,
       tabBarIcon : ()=>{
        return(
          <View>
            <Perfil/>
          </View>
        )
       } 
      
      
      }}/>
    </Tab.Navigator>
  )
}
