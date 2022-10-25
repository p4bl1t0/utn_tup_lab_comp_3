import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { PracticeProvider} from "./contexts/PracticeContext";

function App() {
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
