
import './App.css';

import Test1 from './components/test1';

function App() {
  return (
    <div className="App">
      <h1>Pruebas</h1>
      <Test1 name='Matias' age='22' phone='3415719541'/>
      <Test1 name='Nicolas' age='26' phone='3415719541'/>
      <Test1 name='Juan' age='33' phone='3415719541'/>
    </div>
  );
}

export default App;
