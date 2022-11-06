import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const usePractice = () => {
  const context = useContext(Context);
  return context;
};

export const ContextProvider = ({ children }) => {
  const [selected, setSelected] = useState("#practica_1");

  const changePracticeHandler = (practice) => {
    setSelected(practice);
  };

  return (
    <Context.Provider value={{ selected, changePracticeHandler }}>
      {children}
    </Context.Provider>
  );
};
