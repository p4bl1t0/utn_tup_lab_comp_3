import { useState } from "react";

import { calcLogicGate } from "./helpers";

export default function Practica4 () {

    const randomValue = Math.round(Math.random());

    const [inputOneValue, setInputOneValue] = useState(randomValue);

    const [checkboxValue, setCheckboxValue] = useState(false);

    const [logicGate, setLogicGate] = useState();

    const onInputOneChangeHandler = (event) => {
        if (event.target.value !== '1') {
            setInputOneValue(0);
        } else {
            setInputOneValue(1);
        }
    }

    const onCheckboxChange = (event) => {
        if (event.target.checked === true) {
            setCheckboxValue(1);
        }
        else{
            setCheckboxValue(0);
        }
    }

    const onLogicGateChange = (event) => {
        setLogicGate(event.target.value)
    }

    return (
        <div className="App">
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" onChange={onInputOneChangeHandler} value={inputOneValue}/>
            </div>
            <div>
                <label><input type="checkbox" onChange={onCheckboxChange} checked={checkboxValue}/> Entrada 2</label>
            </div>
                <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate" onChange={onLogicGateChange}>
                    <option value='OR'>OR</option>
                    <option value='AND' >AND</option>
                    <option value='NOR'>NOR</option>
                    <option value='NAND'>NAND</option>
                </select>
            </div>
            <div><span>Salida: {calcLogicGate(inputOneValue, checkboxValue, logicGate)}</span></div>
        </div>
    );
}