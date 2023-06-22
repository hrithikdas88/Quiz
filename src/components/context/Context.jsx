import React, { createContext,useState } from "react";
import {data} from "../../data.js"




const QuesContext = createContext();
 
export function ContextProvider({children}) {
   const QuesArray= data;
   const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

   return(
    <QuesContext.Provider value={{QuesArray,index, setIndex,score, setScore,disabled, setDisabled,selectedOption, setSelectedOption}}>{children}</QuesContext.Provider>
   )
}




export default QuesContext