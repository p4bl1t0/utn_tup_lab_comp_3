
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import { PracticeProvider } from './ContextMenu';




const site = {
  title: 'Unidad 1.2 - Práctica',
  body: 'Implementación de árbol de componentes y propiedades en React.'
}

function App() {
  // const [practiceSelected, setPracticeSelected] = useState('#practica_1');

  return (
    <div>
      <PracticeProvider>
        <Menu />
        <MainContent />
      </PracticeProvider>
    </div>
  );
}

export default App;
