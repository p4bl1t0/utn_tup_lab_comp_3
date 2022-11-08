import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [selected, setselected] = useState('practica_1');

    const selectedHandle = (e) => {
        setselected(e.target.value)
    }

    const data = {selected, selectedHandle}
  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};

export { MenuProvider };
export default MenuContext;