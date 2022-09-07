import { useState } from "react";

export default function Practica4 () {

    const randomValue = Math.round(Math.random());

    const [input1Value, setInput1Value] = useState(randomValue);

    const [checkboxValue, setCheckboxValue] = useState(false);

    const [selectValue, setSelectValue] = useState('and');

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

    let andOutput = (input1Value && checkboxValue);
    let orOutput = (input1Value || checkboxValue);
    let nandOutput = !andOutput;
    let norOutput = !orOutput;


    return (
        <div className="App">
            <div>
                <label for="input1">Entrada 1:</label>
                <input type="number" id="input1" onChange={onChangeInput} value={input1Value}/>
            </div>
            <div>
                <label><input type="checkbox" onChange={onChangeCheckbox} checked={checkboxValue}/> Entrada 2</label>
            </div>
                <div>
                <label for="selectGate">Compuerta lógica:</label>
                <select id="selectGate" onChange={onChangeSelect}>
                    <option value='and'>AND</option>
                    <option value='or' >OR</option>
                    <option value='nand'>NAND</option>
                    <option value='nor'>NOR</option>
                </select>
            </div>
            <div><span>Salida: {(selectValue === 'and'? andOutput 
            : (selectValue === 'or' ? orOutput 
            : (selectValue === 'nor' ? nandOutput 
            : norOutput)))
            }</span></div>
        </div>
    );
}