import "./App.css";
import Menu from "./Menu";
import MainContent from "./MainContent";
import { ContextProvider } from "./Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Menu />
        <MainContent />
      </ContextProvider>
    </>
  );
}

export default App;
