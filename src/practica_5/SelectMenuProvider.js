import { createContext, useState } from "react";

export const MenuContext = createContext();

export const SelectMenuProvider = ({ children }) => {

  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  return (
    <MenuContext.Provider value={{practiceSelected, setPracticeSelected}}>

      {children}
      
    </MenuContext.Provider>
  );
};
