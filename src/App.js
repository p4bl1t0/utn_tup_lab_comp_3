
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import { PracticeProvider } from './practica_5/PracticeContext';

function App() {
  
  return (
    <PracticeProvider>
    <div>
      <Menu />
      <MainContent/>
    </div>
    </PracticeProvider>
  );
}

export default App;
