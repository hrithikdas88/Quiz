import React, { createContext,useState } from "react";
import {data} from "../../data.js"




const QuesContext = createContext();
 
export function ContextProvider({children}) {
   const QuesArray= data;
   const [state, setState] = useState({
      index: 0,
      score: 0,
      disabled: false,
      selectedOption: null
    });
   

   return(
    <QuesContext.Provider value={{ QuesArray,state,setState} }>{children}</QuesContext.Provider>
   )
}




export default QuesContext