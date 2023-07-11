import { useState } from "react";
import {LogicGates} from "./Components/LogicGate";
import {Input1} from "./Components/Input1";
import {Input2} from "./Components/Input2";
import {Input3} from "./Components/Input3";
import {Select} from "./Components/Select";

export default function Practica4 () {
    
    const [resultado, setResultado] = useState(null);
    const [input1, setInput1] = useState(Math.floor(Math.random() * 2));
    const [input2, setInput2] = useState(0)
    const [input3, setInput3] = useState(0)
    const [select, setSelect] = useState("or");
    
    return (
        <div className="App">
            <Input1 setInput1={setInput1} input1={input1} />                
            <Input2 setInput2={setInput2} /> 
            <Input3 setInput3={setInput3} input3={input3}  /> 
            <Select setSelect={setSelect} />       
            <LogicGates input3={input3} input1={input1} input2={input2}  select={select} setResultado={setResultado} resultado={resultado} />     
        </div>
    );
}