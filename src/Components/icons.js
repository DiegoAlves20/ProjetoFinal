import { View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

const size = 24

export const Calendar = () => {
    return(
        <View style={{position:"relative", left:115, top:14}}>
            <Icon name="calendar-o" size={size} color='rgba(255, 255, 255, 0.6)' />
        </View>
        
    )
}
export const CalendarSaida = () => {
    return(
        <View style={{position:"relative", left:62, top:14}}>
            <Icon name="calendar-o" size={size} color='rgba(255, 255, 255, 0.6)'/>
        </View>
        
    )
}

export const PaginaInicial = () => {
    return (
        <Icon name="home" size={size} color='#FFFFFF' />
    )
}

export const Senha = () => {
    return (
        <Icon name="lock" size={size} color='#000000' />
    )
}

export const Favorito = () => {
    return (
        <Icon name="bookmark" size={size} color='#FFF' />
    )
}

export const Perfil = () => {
    return (
        <Icon name="user" size={size} color='#FFF' />
    )
}


export const Filtrar = () => {
    return (
        <Icon style={{position:"relative", left:12, top:10}}
         name= "sliders" size={35} color='#000000' />
    )
}

export const Exportar = () => {
    return (
        
        <Icon  style={{position:"relative", right:10, top:0}}
         name="file-pdf-o" size={size} color='#000000' />
        
    )
}
export const Lupa = () => {
    return (
        <Icon style={{position:"relative", left:-40, top:0}}
         name= "search" size={size} color='#000000' ></Icon>
    )
}

export const Adiconar = () => {
    return (
        <Icon name="plus-circle" size={size} color='#000000' />
    )
}

export const Copiar = () => {
    return (
        <Icon name="clone" size={size} color='#000000' />
    )
}

export const Compartilhar = () => {
    return (
        <Icon name="share-alt" size={size} color='#000000' />
    )
}

export const SetaCima = () => {
    return (
        <Icon name="arrow-up" size={size} color='#000000' />
    )
}

export const SetaBaixo = () => {
    return (
        <Icon name="arrow-down" size={size} color='#000000' />
    )
}
export const GoBack = () => {
    return (
        <Icon name="arrow-left" size={size} color='#000000' />
    )
}
export const GoBackVaga = () => {
    return (
        <Icon name="arrow-left" size={28} color='#FFF' />
    )
}

export const Vaga = () => {
    return (
        <Icon name="suitcase" size={size} color='#FFF' />
    )
}



export const Icones = ()  => {
    return (
        <View>
            <Calendar/>
            <CalendarSaida/>
            <PaginaInicial/>
            <Senha/>
            <Favoritos/>
            <Perfil/>
            <Filtrar/>
            <Exportar/>
            <Adiconar/>
            <Copiar/>
            <Compartilhar/>
            <SetaCima/>
            <SetaBaixo/>
            <Vaga/>
            <GoBack/>
            <GoBackVaga/>
        </View>
    )
}



/* login senha home vagas favoritos perfil menu filtrar exportar adicionar copiar compartilhar seta p cima seta pra baixo  */








