import React,{createContext,useState} from "react";

export const StateContext = createContext();

export const StateProvider = ({ children}) => {
   const [cart,updateCart] = useState([]);
   return <StateContext.Provider value={[cart,updateCart]}>
        {children}
    </StateContext.Provider>
}
