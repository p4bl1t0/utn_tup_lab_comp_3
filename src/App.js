
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import { MenuProvider } from './Context/MenuContext';

function App() {
  
  return (
    <div>
      <MenuProvider>
        <Menu/>
        <MainContent />
      </MenuProvider>
      
    </div>
  );
}

export default App;
