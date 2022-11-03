import React, {useEffect} from "react";
import { View,Text, TouchableOpacity } from "react-native";

export const Menu = ({navigation}) => {
    useEffect(() =>{
        navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
    },[])
    

    return (
        <View>
            <Text>Menu</Text>

            <TouchableOpacity onPress={() =>{
                navigation.getParent().setOptions({tabBarStyle: {display: 'none'}})
                navigation.navigate("Login")
                navigation.dispatch()
            }}>
                <Text style={{fontSize:20, color:'red'}}>SAIR</Text>
            </TouchableOpacity>
        </View>
        
    )
}