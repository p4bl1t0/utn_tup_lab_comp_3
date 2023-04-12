
import './App.css';
import Menu from './Menu';
import { useState } from 'react';
import MainContent from './MainContent';
import Header1 from './practica_2/components/Header';
import Main from './practica_2/components/Main';
import Page from './practica_2/components/Page';

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
