
import './App.css';
import Menu from './Menu';
import { createContext, useState } from 'react';
import MainContent from './MainContent';
export const PracticeContext = createContext();

function App() {
  const [practiceSelected, setPracticeSelected] = useState('#practica_1');
  return (
    <div>
    <PracticeContext.Provider value={{ practiceSelected, setPracticeSelected }}> 
      <Menu />
      <MainContent />
    </PracticeContext.Provider>
  </div>
  );
}

export default App;
