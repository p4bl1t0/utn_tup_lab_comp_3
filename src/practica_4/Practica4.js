import { useState } from "react";
import Checkbox from "./Checkbox";
import Input1 from "./Input1";
import LogicGates from "./LogicGates";

const Practica4 = () => {

    const [input1Value,setInput1Value] = useState(Math.round(Math.random()));
    const [input2Value,setInput2Value] = useState();
    const [resultLogic,setResultLogic] = useState();

    const inputValueHandler = (event) => {
        setInput1Value(event.target.value === 1 ? 1 : 0)
    }
    const checkboxHandler = (event) => {
        setInput2Value( event.target.checked ? 1 : 0 )
    }

    return (
        <>
            <Input1 input1Value={input1Value} inputValueHandler={inputValueHandler}/>
            <Checkbox checkboxHandler={checkboxHandler}/>
            <LogicGates setResultLogic={setResultLogic} input1Value={input1Value} input2Value={input2Value}/>
            <p>{Boolean(resultLogic).toString()}</p>
        </>
    );

}

export default Practica4;