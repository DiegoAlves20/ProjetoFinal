/* import React, { Component } from "react";
import { View, FlatList, Text} from "react-native";

import api from "../../services/API";


export default class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: [
                {
                    nome:'',
                    email:''
                }
            ]
        }
    }

    async componentDidMount(){
       const res = await api.post('usuario');
        this.setState({
            
            date: res.data  
        })
    }
    
    
    render(){
        return(
            <View>
                 <FlatList 
                    data={this.state.date}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Users data={this.state.date.nome}/>}
                />  
            </View>
        )
    }
    Users = () => {
        return(
            
                <View>
                    <Text style={{color:'red'}}>{this.props.data.nome}</Text> 
                </View> 
       
        )
}
}



 */