import { createContext, useState } from "react";

const ContextMenu = createContext();

const ProviderMenu = ({ children }) => {
  const [path, setPath] = useState("practica_1");

  const pathHandler = (value) => {
    setPath(value);
  };

  const data = { path, pathHandler };

  return <ContextMenu.Provider value={data}>{children}</ContextMenu.Provider>;
};

export { ProviderMenu };
export default ContextMenu;
