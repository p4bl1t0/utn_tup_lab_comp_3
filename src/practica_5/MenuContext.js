import { createContext, useState } from "react";

const menuContext = createContext();

const MenuProvider = ({ children }) => {
  const [practice, setPractice] = useState("#practica_1");

  let menuData = { setPractice, practice };

  return (
    <menuContext.Provider value={menuData}>{children}</menuContext.Provider>
  );
};

export { MenuProvider };
export default menuContext;
