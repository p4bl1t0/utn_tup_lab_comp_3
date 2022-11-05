import { useState } from "react";

import LogicGates from "./LogicGates";
import Input1 from "./Input1";
import CheckBox from "./CheckBox";

const Practica4 = () => {

    const [inputValueFather,setInputValueFather] = useState()
    const [checkboxValueFather,setCheckboxValueFather] = useState();
    
    const sentInputValue = (arg) =>{
        setInputValueFather(arg)
    }

    const sentCheckboxValue = (arg) => {
        setCheckboxValueFather(arg)
    }

    return (
        <div>
            <Input1 sentInputValue={sentInputValue}/>
            <CheckBox sentCheckBoxValue={sentCheckboxValue}/>
            <LogicGates inputValue={inputValueFather} checkboxValue={checkboxValueFather} />
        </div>
    );

}

export default Practica4;