import { createContext, useContext, useState } from "react";

export const LabComIIIContext = createContext();

export const usePractice = () => {
  const context = useContext(LabComIIIContext);
  return context;
};

export const PracticeProvider = ({ children }) => {
  const [selectedPractice, setSelectedPractice] = useState("#practica_1" );

  const onChangePractice = (event) => {
    setSelectedPractice(event);
  };

  return (
    <LabComIIIContext.Provider value={{ selectedPractice, onChangePractice }}>
      {children}
    </LabComIIIContext.Provider>
  );
};