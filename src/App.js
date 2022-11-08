import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { ProviderMenu } from "./ContextMenu";

function App() {
  return (
    <ProviderMenu>
      <Menu />
      <MainContent />
    </ProviderMenu>
  );
}

export default App;
