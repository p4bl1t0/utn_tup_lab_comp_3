import { createContext,useState } from "react";

const pathContext = createContext();

const PathProvider = ({children}) => {

    const [practiceSelected, setPracticeSelected] = useState('#practica_1');
    
    let data = {setPracticeSelected,practiceSelected}

    return(
        <pathContext.Provider value={data} >{children}</pathContext.Provider>
    )
}


export {PathProvider};
export default pathContext;