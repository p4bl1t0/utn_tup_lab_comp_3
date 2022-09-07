import { useState } from "react";

import { calcLogicGate } from "./helpers";

export default function Practica4 () {

    const randomValue = Math.round(Math.random());

    const [inputOneValue, setInput1Value] = useState(randomValue);

    const [checkboxValue, setCheckboxValue] = useState(false);

    const [selectValue, setSelectValue] = useState();

    const onChangeInput = (event) => {
        if (event.target.value !== '1') {
            setInput1Value(0);
        }
        else {
            setInput1Value(1);
        }
    }

    const onChangeCheckbox = (event) => {
        if (event.target.checked === true) {
            setCheckboxValue(1);
        }
        else{
            setCheckboxValue(0);
        }
    }

    const onChangeSelect = (event) => {
        setSelectValue(event.target.value);
    }

    return (
        <div className="App">
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" onChange={onChangeInput} value={inputOneValue}/>
            </div>
            <div>
                <label><input type="checkbox" onChange={onChangeCheckbox} checked={checkboxValue}/> Entrada 2</label>
            </div>
                <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate" onChange={onChangeSelect}>
                    <option value='OR'>OR</option>
                    <option value='AND'>AND</option>
                    <option value='NOR'>NOR</option>
                    <option value='NAND'>NAND</option>
                </select>
            </div>
            <div><span>Salida: {calcLogicGate(inputOneValue, checkboxValue, selectValue)}</span></div>
        </div>
    );
}