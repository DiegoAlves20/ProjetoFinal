import React, {createContext, useReducer, useState} from "react";

export default (reducer, actions, initialValue) =>{


const Context = useState(createContext);

    const Provider = ({children}) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialValue
    );

    const customFunction = {};
    Object.keys(actions).forEach(
        (key) => (customFunction[key] = actions[key](dispatch))
    ); 
        return(
            <Context.Provider value={{state, ...customFunction}}>
                {children}
            </Context.Provider>
        )
    };
    return(Context, Provider);
}