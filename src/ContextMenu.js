import { createContext, useContext, useState } from "react";

export const PracticeContext = createContext();

export const usePractice = () => {
  const context = useContext(PracticeContext);
  return context;
};


export const PracticeProvider = ({ children }) => {
  const [selectedPractice, setSelectedPractice] = useState("#practica_1");

  const changePracticeHandler = (event) => {
    setSelectedPractice(event);
  };

  return (
    <PracticeContext.Provider value={{ selectedPractice, changePracticeHandler }}>
      {children}
    </PracticeContext.Provider>
  );
};