import React,{createContext, useReducer} from "react";
import { initialState, UseReducer } from "./useReducer";
export const Context = createContext();


export default ({children}) =>{
    const [state, dispatch] = useReducer(UseReducer, initialState);
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
