import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import PracticeContext from './practica_5/PracticeContext';

function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');

  return (
    <div>
      <PracticeContext.Provider value={practiceSelected}>
        <Menu onOptionSelected={(t) => setPracticeSelected(t)} />
        <MainContent />
      </PracticeContext.Provider>
    </div>
  );
}

export default App;