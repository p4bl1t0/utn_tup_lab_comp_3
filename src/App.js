
import './App.css';
import Menu from './Menu';
import { useState } from 'react';
import MainContent from './MainContent';

function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');
  return (
    <div>
      <Menu onOptionSelected={(t) => { setPracticeSelected(t) }} />
      <MainContent practiceSelected={practiceSelected} />
    </div>
  );
}

export default App;
