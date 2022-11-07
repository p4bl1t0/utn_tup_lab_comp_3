import "./App.css";
import Menu from "./Menu";
import { useState } from "react";
import MainContent from "./MainContent";

import { MenuProvider } from "./practica_5/Context/MenuContext";

function App() {
  const [practiceSelected, setPracticeSelected] = useState("#practica_1");
  return (
    <div>
      <Menu
        onOptionSelected={(t) => {
          setPracticeSelected(t);
        }}
      />
      <MainContent practiceSelected={practiceSelected} />
      <MenuProvider></MenuProvider>
    </div>
  );
}

export default App;
