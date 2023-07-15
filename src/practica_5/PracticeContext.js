import { createContext, useState } from "react";

const PracticeContext = createContext();

const PracticeProvider = ({ children }) => {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  return (
    <PracticeContext.Provider value={{ practiceSelected, setPracticeSelected }}>
      {children}
    </PracticeContext.Provider>
  );
};

export { PracticeProvider };
export default PracticeContext;