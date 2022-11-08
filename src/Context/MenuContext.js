import { createContext, useState } from "react";
//- Utilizar context de React para extender el componente Menú y desde el cuál selecionar cuál práctica está visible seteándola en el contexto y acciendo a ella desde el componente MainContent para mostrar la práctica correcta. 

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [path, setPath] = useState('practica_1');

    const pathHandle = (e) => {
        setPath(e.target.value)
    }

    console.log(path)
    const data = {path, pathHandle}
  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};

export { MenuProvider };
export default MenuContext;