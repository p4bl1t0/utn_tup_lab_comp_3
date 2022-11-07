import { createContext, useState } from "react";

const PractContext = createContext();

const PractProvider = ({ children }) => {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  let data = { setPracticeSelected, practiceSelected };

  return <PractContext.Provider value={data}>{children}</PractContext.Provider>;
};

export { PractProvider };
export default PractContext;
