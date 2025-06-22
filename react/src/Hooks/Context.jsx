import { Children, createContext } from "react";
const Context=createContext();
const userContext=(children)=>{
    const user={name:"jeeva",phn:"12344544"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}