
import { useState } from "react";

import LogicGates from "./components/LogicGates/LogicGates";


export default function Practica4 () {
  //////////////////////
    const [valueInput, setValueInput] = useState(Math.round(Math.random()))
    const valueInputHandler = (event) =>{
    setValueInput( parseInt(event.target.value) === 1 || parseInt(event.target.value) === 0  ? event.target.value: 0 );   
    }   
   

    ////////////////////////////
    const [ischecked, Setischecked] = useState(0);
   
    const checkBoxValueHandler = () =>{
    (ischecked == 0 ? Setischecked(1):Setischecked(0))
    }
    
    ///////////////////////////////////
    const [selectValue, setSelectValue] = useState()
  
    const selectValueHandler = (event) =>{
        
        setSelectValue(event.target.value);
        } 
    return (
    <div className="App">
    <div>
    <label htmlFor="input1">Entrada 1:</label>
    <input type="number" id="input1" onChange={valueInputHandler} />    
    </div>

    <div>
    <label><input type="checkbox" onChange={checkBoxValueHandler} /> Entrada 2</label>
    </div>

    <div>
    <label htmlFor="selectGate">Compuerta lógica:</label> 

    <select id="selectGate" value={selectValue} onChange={selectValueHandler} >
        <option >Selecione un valor</option>
        <option value="or">or</option>
        <option value="and">and</option>
        <option value="nand">nand</option>
        <option value="nor">nor</option>
        <option value="xor">xor</option>
    </select>  
    </div>
    <LogicGates 
        SelectValue={selectValue}
        valueInput={valueInput}
        ischecked={ischecked}
        ></LogicGates>
    </div>
    );
}