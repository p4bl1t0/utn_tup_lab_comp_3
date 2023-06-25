import { createContext, useState } from "react";

const P5Context = createContext();

const P5Provider = ({ children }) => {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");

  return (
    <P5Context.Provider value={{ practiceSelected, setPracticeSelected }}>
      {children}
    </P5Context.Provider>
  );
};

export { P5Provider };
export default P5Context;
