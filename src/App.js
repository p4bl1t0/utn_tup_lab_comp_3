import { useState } from 'react';
import './App.css';

import Menu from './Menu';
import MainContent from './MainContent';
import { PathProvider } from './practica_5/pathContext';


function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');
  return (
    <div>
      <PathProvider>
        <Menu onOptionSelected={(t) => { setPracticeSelected(t) }} />
        <MainContent practiceSelected={practiceSelected} />
      </PathProvider>
    </div>
  );
}

export default App;