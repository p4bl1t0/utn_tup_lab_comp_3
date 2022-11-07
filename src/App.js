import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import {SelectMenuProvider} from './practica_5/SelectMenuProvider'

function App() {
  
  return (
    <div>
      <SelectMenuProvider>
        <Menu />
        <MainContent />
      </SelectMenuProvider>
    </div>
  );
}

export default App;
