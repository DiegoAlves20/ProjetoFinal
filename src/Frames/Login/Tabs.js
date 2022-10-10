import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CadUser, Home } from "./Stacks";


const Tab = createBottomTabNavigator();

export default function Tabs(){
  return(
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}  />
        <Tab.Screen name='Cadastro' component={CadUser}/>
    </Tab.Navigator>
   
  )
}
