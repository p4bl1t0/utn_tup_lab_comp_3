import { createContext, useState } from "react";

const PractContext = createContext();

const PractProvider = ({ children }) => {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  let data = { practiceSelected, setPracticeSelected };

  return <PractContext.Provider value={data}></PractContext.Provider>;
};

export { PractProvider };
export default PractProvider;
