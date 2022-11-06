import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { PractProvider} from  './practica_5/PractContext';

function App() {
  const[practiceSelected, setPracticeSelected] = useState('#practica_1');

  return (
    <div>
      <PractProvider>
        <Menu onOptionSelected={(p) => { setPracticeSelected(p) }} />
        <MainContent practiceSelected={practiceSelected} />
      </PractProvider>
    </div>
  );
}

export default App;
