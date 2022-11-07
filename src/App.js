import "./App.css";
import Menu from "./Menu";
import { useState } from "react";
import MainContent from "./MainContent";
import { PracticeContext } from "./Context/PracticeContext";
import { PracticeDispatchContext } from "./Context/PracticeDispatchContext";

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <PracticeProvider>
        <Menu />
        <MainContent />
      </PracticeProvider>
    </div>
  );
}

export default App;

const PracticeProvider = ({ children }) => {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");
  return (
    <PracticeContext.Provider value={practiceSelected}>
      <PracticeDispatchContext.Provider value={setPracticeSelected}>{children}</PracticeDispatchContext.Provider>
    </PracticeContext.Provider>
  );
};
