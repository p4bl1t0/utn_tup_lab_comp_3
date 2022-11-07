import { useState } from "react";

import LogicGates from "./LogicGates";
import Input1 from "./Input1";
import CheckBox from "./CheckBox";
import Operation2 from "./Operation2";

const Practica4 = () => {

    const [inputValueFather,setInputValueFather] = useState()
    const [checkboxValueFather,setCheckboxValueFather] = useState();
    const [inputRange,setInputRange] = useState(1);
    const [inputRadio,setInputRadio] = useState()
    const [lgOne,setLgOne] = useState(0);
    const [lgTwo,setLgTwo] = useState(0);

    
    const sentInputValue = (arg) => setInputValueFather(arg) ;
    const sentCheckboxValue = (arg) => setCheckboxValueFather(arg);

    const sentRangeValue = (arg) => setInputRange(arg);
    const sentRadioValue = (arg) => setInputRadio(arg) ;

    const sentValueLgOne = (arg) => setLgOne(arg) ;
    const sentValueLgTwo = (arg) => setLgTwo(arg) ;

    return (
        <div>
            <Input1 sentInputValue={sentInputValue}/>
            <CheckBox sentCheckBoxValue={sentCheckboxValue}/>
            <LogicGates valueOne={inputValueFather} valueTwo={checkboxValueFather} resultLg={sentValueLgOne}/>
            <hr></hr>
            <Operation2 sentRangeValue={sentRangeValue} sentRadioValue={sentRadioValue}/>
            <LogicGates valueOne={inputRange} valueTwo={inputRadio} resultLg={sentValueLgTwo}/>
            <hr></hr>
            <p>Resultado 1: {lgOne}</p>
            <p>Resultado 2: {lgTwo}</p>
            <LogicGates valueOne={lgOne} valueTwo={lgTwo} />
        </div>
    );

}

export default Practica4;