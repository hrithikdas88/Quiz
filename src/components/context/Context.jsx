import React, { createContext } from "react";
import {data} from "../../data.js"




const QuesContext = createContext();
 
export function ContextProvider({children}) {
   const QuesArray= data;
   return(
    <QuesContext.Provider value={{QuesArray}}>{children}</QuesContext.Provider>
   )
}




export default QuesContext