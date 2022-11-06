import './App.css';
import Menu from './Menu';
import { useState } from 'react';
import MainContent from './MainContent';
import { P5Provider } from './practica_5/p5Context';

function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');
  return (
    <div>
      <P5Provider>
        <Menu onOptionSelected={(t) => { setPracticeSelected(t) }} />
        <MainContent practiceSelected={practiceSelected} />
      </P5Provider>
    </div>
  );
}

export default App;
